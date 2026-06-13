import React from "react";
export default function SafeSpotsList({spots=[]}){
  return (
    <div className="card">
      <h4>Safe Spots</h4>
      {spots.length===0 && <div style={{color:"#9fb7d8"}}>No spots yet</div>}
      {spots.map((s,i)=>(
        <div key={i} style={{padding:8,borderBottom:"1px solid rgba(255,255,255,0.03)"}}>
          <b>{s.name}</b><div style={{color:"#9fb7d8"}}>{s.type}</div>
        </div>
      ))}
    </div>
  );
}
