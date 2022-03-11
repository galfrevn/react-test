/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const names = [
  "accounts",
  "assets",
  "customers",
  "datapoints",
  "devices",
  "documents",
  "forms",
  "invites",
  "media",
  "messages",
  "namespaces",
  "orders",
  "patients",
  "relationships",
  "rules",
  "templates",
  "users",
  "workflows",
];

function App() {
  return (
    <div className="bg-[#f8f8f8] h-screen">

      <Header />

      <div className="grid px-2 md:px-14 lg:px-20 gap-3 md:gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {names.map((name) => (
          <Card name={name} />
        ))}
      </div>
    </div>
  );
}

export default App;
