import { useState } from "react";

// //*
// //* Create a react app that has a
// //* 1. Header component that takes a title as a prop and renders it inside a div
// //* 2. The top level App component renders 2 Headers

// function App() {
//   const [title, setTitle] = useState("My name is Parijat hehehe");

//   const updateTitle = () => {
//     setTitle("my name is " + Math.random());
//   };

//   return (
//     <>
//       <button onClick={updateTitle}>Click here to change the title</button>
//       <Header title={title} />
//       <Header title="my name is Parijat" />
//     </>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;

// so now the issue is that there is re-render and so as to decrease it we have 2 options
// 1. We push the state down -> As we can see that the state variable is defined in the App component
//

function App() {
  const [title, setTitle] = useState("My name is Parijat hehehe");
  const updateTitle = () => {
    setTitle("my name is " + Math.random());
  };
  return (
    <>
      <button onClick={updateTitle}>Click here to change the title</button>
      <Header title={title} />
      <Header title="my name is Parijat" />
    </>
  );
}

function HeaderButton() {}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
