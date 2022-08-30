import { useState } from "react";
import Form from "./Form";
import Username from "./Username";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <>
      <Username setCurrentUser={setCurrentUser} />
    </>
  );
}

export default App;
