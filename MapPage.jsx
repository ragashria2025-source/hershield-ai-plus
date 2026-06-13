import React, {useEffect, useState} from "react";
import SafeSpotsList from "../components/SafeSpotsList";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";

initializeApp(firebaseConfig);
const db = getFirestore();

export default function MapPage(){
  const [spots, setSpots] = useState([]);
  useEffect(()=>{ (async ()=>{
    const snap = await getDocs(collection(db,"safeSpots"));
    setSpots(snap.docs.map(d=>d.data()));
  })(); },[]);
  return (
    <div style={{display:"flex",gap:12}}>
      <div className="card" style={{flex:2,minHeight:400}}>Map placeholder — integrate Mapbox/Google Maps and overlay safe spots.</div>
      <div style={{width:320}}>
        <SafeSpotsList spots={spots} />
      </div>
    </div>
  );
}
