import React from "react";
import Router from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App(){
  return (
    <div className="app">
      <Header />
      <main style={{padding:20}}>
        <Router />
      </main>
      <Footer />
    </div>
  );
}
