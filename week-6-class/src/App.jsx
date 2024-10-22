import { useState } from "react";

//*
//* Create a react app that has a
//* 1. Header component that takes a title as a prop and renders it inside a div
//* 2. The top level App component renders 2 Headers

function App() {
  return (
    <>
      <Header title="my name is parijat" />
      <Header title="My name is bhattacharjee" />
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
