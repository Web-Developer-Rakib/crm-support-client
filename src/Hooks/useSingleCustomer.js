import { useState } from "react";

const useSingleCustomer = () => {
  const [singleCustomer, setSingleCustomer] = useState({});
  const handleView = (id) => {
    const cid = { id };
    fetch("http://localhost:5000/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cid),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSingleCustomer(data);
      });
  };
  return { singleCustomer, handleView };
};

export default useSingleCustomer;
