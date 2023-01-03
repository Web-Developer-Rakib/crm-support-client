import { useEffect, useState } from "react";

const useAllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_Server_Link}/customers`)
      .then((res) => res.json())
      .then((data) => {
        if (filterStatus === "Open") {
          setCustomers(
            data.filter((customer) => customer.status === filterStatus)
          );
        } else if (filterStatus === "Close") {
          setCustomers(
            data.filter((customer) => customer.status === filterStatus)
          );
        } else if (filterStatus === "Pending") {
          setCustomers(
            data.filter((customer) => customer.status === filterStatus)
          );
        } else {
          setCustomers(data);
        }
      });
  }, [filterStatus]);

  return { customers, setFilterStatus, setCustomers };
};

export default useAllCustomers;
