import React from "react";
import Header from "./components/header";
import Content from "./components/content";
import "./style.css";
import data from "./data";

export default function App() {
  const content = data.map((item) => {
    return <Content {...item} />;
  });
  return (
    <div>
      <Header />
      <section>{content}</section>
    </div>
  );
}
