/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import Card from "./components/Card";

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
    <div className="bg-white grid grid-cols-2">
      {names.map((name) => (
        <Card name={name} />
      ))}
    </div>
  );
}

export default App;
