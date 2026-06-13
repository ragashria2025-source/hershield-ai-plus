import React from "react";
import { db } from "../firebaseInit.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import io from "socket.io-client";

const socket = io("http://localhost:4000"); // change to deployed backend URL later

export default function SOSButton(){
  async function sendSOS(){
    const doc = { type: "SOS", note: "User pressed SOS (demo)", timestamp: new Date().toISOString() };
    try {
      await addDoc(collection(db, "alerts"), doc);
      socket.emit("triggerSOS", doc);
      alert("SOS sent (demo).");
    } catch (e) {
      console.error(e);
      alert("Could not send SOS. Check console.");
    }
  }
  return <button onClick={sendSOS} style={{background:"#e74c3c",color:"#fff",padding:10,borderRadius:8}}>🚨 SOS</button>;
}
