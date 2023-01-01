import { useEffect, useState } from "react";

const useAllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  return { customers };
};

export default useAllCustomers;
