import React from "react";
import TrafficSignal from "../components/TrafficSignal";
import AlertsPanel from "../components/AlertsPanel";

export default function Home(){
  return (
    <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:16}}>
      <div>
        <div className="card">
          <h2>HerShield AI+</h2>
          <p>AI guardian for women’s commute — demo prototype.</p>
          <TrafficSignal />
        </div>
        <div style={{height:12}}/>
        <div className="card">
          <h3>Quick Actions</h3>
          <p>Use Report page to send SOS, upload evidence, or mark unsafe.</p>
        </div>
      </div>
      <div>
        <AlertsPanel />
      </div>
    </div>
  );
}
