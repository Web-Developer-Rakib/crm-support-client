import { useState } from "react";
import { toast } from "react-toastify";
import useAllCustomers from "./useAllCustomers";

const useDeleteCustomer = () => {
  const { customers, setCustomers } = useAllCustomers();
  const [id, setId] = useState("");
  const onDeleteClicked = (customerId) => {
    setId(customerId);
  };
  const onDeleteConfirmed = () => {
    fetch(`http://localhost:5000/delete-customer/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          toast.success("Customer deleted successfuly.");
          setCustomers(customers.filter((customer) => customer?._id !== id));
        } else {
          toast.error("Something went wrong.");
        }
      });
  };
  return { onDeleteClicked, onDeleteConfirmed };
};

export default useDeleteCustomer;
