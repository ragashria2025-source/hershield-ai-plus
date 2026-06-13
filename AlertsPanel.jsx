import React, {useEffect, useState} from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { getFirestore, collection, query, orderBy, onSnapshot } from "firebase/firestore";

initializeApp(firebaseConfig);
const db = getFirestore();

export default function AlertsPanel(){
  const [alerts,setAlerts] = useState([]);
  useEffect(()=>{
    const q = query(collection(db,"alerts"), orderBy("timestamp","desc"));
    const unsub = onSnapshot(q, snap => {
      setAlerts(snap.docs.map(d=>d.data()));
    });
    return ()=>unsub();
  },[]);
  return (
    <div className="card">
      <h3>Live Alerts</h3>
      <div style={{maxHeight:300,overflow:"auto"}}>
        {alerts.map((a,i)=>(
          <div key={i} style={{padding:8,borderBottom:"1px solid rgba(255,255,255,0.03)"}}>
            <b>{a.type}</b> — {a.note || ""} <div style={{fontSize:12,color:"#9fb7d8"}}>{new Date(a.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
