import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navber from "./Components/Navber/Navber";
import { Outlet } from "react-router-dom";
import Fotter from "./Components/Fotter/Fotter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navber />
      <Outlet></Outlet>
      <Fotter></Fotter>
    </>
  );
}

export default App;
