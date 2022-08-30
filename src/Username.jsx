import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import InputField from "./InputField";
import datajson from "./datajson";
import Form from "./Form";
const Username = ({ setCurrentUser }) => {
  const [fetchdata, setFetchData] = useState(datajson);
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState({});
  const checkUser = () => {
    const newdata = fetchdata.filter((element) => {
      console.log(element);
      if (element.username === user) {
        return element;
      }
    });
    console.log(newdata);
    if (newdata.length === 0) {
      alert("No user");
    } else {
      setUserData(newdata[0].data);
    }
  };
  if (Object.keys(userData).length !== 0) {
    return <Form currentUser={userData} />;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkUser();
        }}
      >
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <input type="submit" />
      </form>
    );
  }
};

export default Username;
