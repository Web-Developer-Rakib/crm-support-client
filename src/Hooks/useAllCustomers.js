import { useEffect, useState } from "react";

const useAllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_Server_Link}/customers`)
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  return { customers };
};

export default useAllCustomers;
