import React, {useState} from "react";
import EvidenceUploader from "../components/EvidenceUploader";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import io from "socket.io-client";

initializeApp(firebaseConfig);
const db = getFirestore();
const socket = io("http://localhost:4000");

export default function Report(){
  const [note,setNote] = useState("");
  async function sendSOS(){
    const doc = { type:"SOS", note, timestamp:new Date().toISOString() };
    await addDoc(collection(db,"alerts"), doc);
    socket.emit("triggerSOS", doc);
    alert("SOS sent (demo).");
  }
  async function sendUnsafe(){
    const doc = { type:"UNSAFE", note, timestamp:new Date().toISOString() };
    await addDoc(collection(db,"alerts"), doc);
    socket.emit("triggerUnsafe", doc);
    alert("Feeling unsafe recorded (demo).");
  }
  return (
    <div className="card">
      <h2>Report</h2>
      <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Describe location or issue" style={{width:"100%",height:80}}/>
      <div style={{marginTop:8}}>
        <button className="button sos" onClick={sendSOS}>🚨 Send SOS</button>
        <button className="button" onClick={sendUnsafe} style={{marginLeft:8}}>⚠️ Feeling Unsafe</button>
      </div>
      <div style={{marginTop:12}}>
        <h4>Upload evidence (photo/audio)</h4>
        <EvidenceUploader />
      </div>
    </div>
  );
}
