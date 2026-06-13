import React, {useState} from "react";
import axios from "axios";

export default function AiDemo(){
  const [score,setScore] = useState(null);
  const [voice,setVoice] = useState(null);
  async function getSafeScore(){
    const res = await axios.post("http://localhost:4000/api/ai/safe-score",{ route:[] });
    setScore(res.data.score);
  }
  async function detectVoice(){
    const res = await axios.post("http://localhost:4000/api/ai/voice-detect",{});
    setVoice(res.data);
  }
  return (
    <div className="card">
      <h2>AI Demo</h2>
      <div>
        <button className="button" onClick={getSafeScore}>Mock Safe Score</button>
        <div>Score: {score ?? "—"}</div>
      </div>
      <div style={{marginTop:12}}>
        <button className="button" onClick={detectVoice}>Mock Voice Distress</button>
        <div>Voice: {voice ? JSON.stringify(voice) : "—"}</div>
      </div>
    </div>
  );
}
