import React, {useState} from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

initializeApp(firebaseConfig);
const storage = getStorage();
const db = getFirestore();

export default function EvidenceUploader(){
  const [file,setFile] = useState(null);
  async function upload(){
    if(!file){ alert("Choose a file"); return; }
    const path = `evidence/${Date.now()}_${file.name}`;
    const r = ref(storage, path);
    await uploadBytes(r, file);
    const url = await getDownloadURL(r);
    await addDoc(collection(db,"evidence"), { url, name:file.name, timestamp:new Date().toISOString() });
    alert("Uploaded evidence (demo).");
  }
  return (
    <div>
      <input type="file" onChange={e=>setFile(e.target.files[0])} />
      <button className="button" onClick={upload} style={{marginLeft:8}}>Upload</button>
    </div>
  );
}
