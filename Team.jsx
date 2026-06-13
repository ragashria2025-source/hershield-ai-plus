import React from "react";
export default function Team(){
  const team = [
    {role:"Mechanical (Team Lead)", name:"Ragashri"},
    {role:"Computer Science", name:"Dev A"},
    {role:"Information Technology", name:"Dev B"},
    {role:"AI & Data Science", name:"Dev C"}
  ];
  return (
    <div className="card">
      <h2>Team</h2>
      {team.map((t,i)=>(
        <div key={i} style={{padding:8,borderBottom:"1px solid rgba(255,255,255,0.03)"}}>
          <b>{t.role}</b><div style={{color:"#9fb7d8"}}>{t.name}</div>
        </div>
      ))}
    </div>
  );
}
