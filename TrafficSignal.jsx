import React, {useState} from "react";
export default function TrafficSignal(){
  const [mode,setMode] = useState("green");
  return (
    <div className="card">
      <h3>Traffic Signal Flow</h3>
      <div style={{display:"flex",gap:8,alignItems:"center"}}>
        <div style={{width:60,height:60,borderRadius:30,background:mode==="green"?"#2ecc71":"#222",display:"flex",alignItems:"center",justifyContent:"center"}}>G</div>
        <div style={{width:60,height:60,borderRadius:30,background:mode==="yellow"?"#f1c40f":"#222",display:"flex",alignItems:"center",justifyContent:"center"}}>Y</div>
        <div style={{width:60,height:60,borderRadius:30,background:mode==="red"?"#e74c3c":"#222",display:"flex",alignItems:"center",justifyContent:"center"}}>R</div>
      </div>
      <div style={{marginTop:8}}>
        <button className="button" onClick={()=>setMode("green")}>Preventive</button>
        <button className="button" onClick={()=>setMode("yellow")} style={{marginLeft:8}}>Feeling Unsafe</button>
        <button className="button sos" onClick={()=>setMode("red")} style={{marginLeft:8}}>Emergency</button>
      </div>
    </div>
  );
}
