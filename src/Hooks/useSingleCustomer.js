import { useState } from "react";

const useSingleCustomer = () => {
  const [singleCustomer, setSingleCustomer] = useState({});
  const handleView = (id) => {
    const cid = { id };
    fetch(`${process.env.REACT_APP_Server_Link}/customer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cid),
    })
      .then((response) => response.json())
      .then((data) => {
        setSingleCustomer(data);
      });
  };
  return { singleCustomer, handleView };
};

export default useSingleCustomer;
