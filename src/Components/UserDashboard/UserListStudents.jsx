import React, { useEffect, useState } from "react";
import { UserStudent } from "./UserStudent";

export const UserListStudents = ({ ...props }) => {
  const [arrClients, setarrClients] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/adminPanel", {
      method: "GET",
      headers: { "Content-Type": "application/json", "auth-token": props.user },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else console.log("bad req");
      })
      .then((data) => setarrClients(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row">
      {arrClients.map((k) => (
        <UserStudent key={k._id} date={k.date} name={k.name} email={k.email} />
      ))}
    </div>
  );
};
