import React, { useState } from "react";
import { toast } from "react-toastify";
import useUser from "../../Hooks/useUser";

const AddCustomerData = () => {
  const { user } = useUser();
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [leadDate, setLeadDate] = useState("");
  const [comment, setComment] = useState("");
  const personIncharge = user.name;
  const inchargeUsername = user.userName;
  const customerDetails = {
    customerName,
    contactNumber,
    email,
    status,
    leadDate,
    personIncharge,
    inchargeUsername,
    comment,
  };
  const handleAddCustomerData = (e) => {
    e.preventDefault();
    if (
      customerName === "" ||
      status === "" ||
      contactNumber === "" ||
      email === "" ||
      status === "" ||
      comment === ""
    ) {
      toast.warn("Please fill up all field.");
    } else {
      fetch("http://localhost:5000/post-customer-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerDetails),
      })
        .then((response) => response.json())
        .then(() => {
          toast.success("Customer added successfully.");
        })
        .catch(() => {
          toast.error("Something went wrong.");
        });
    }
  };
  return (
    <div className="mt-10">
      <form>
        <h2 className="my-5 text-2xl">Add customer data</h2>
        <h4 className="text-lg">Customer name</h4>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs mb-3"
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <h4 className="text-lg">Contact number</h4>
        <input
          type="number"
          placeholder="Contact number"
          className="input input-bordered w-full max-w-xs mb-3"
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <h4 className="text-lg">Email</h4>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4 className="text-lg">Status</h4>
        <span className="mr-4">
          Open{" "}
          <input
            type="radio"
            name="radio-6"
            className="radio radio-success"
            onClick={() => setStatus("Open")}
          />
        </span>
        <span className="mr-4">
          Close{" "}
          <input
            type="radio"
            name="radio-6"
            className="radio radio-error"
            onClick={() => setStatus("Close")}
          />
        </span>
        <span>
          Pending{" "}
          <input
            type="radio"
            name="radio-6"
            className="radio radio-warning"
            onClick={() => setStatus("Pending")}
          />
        </span>
        <h4 className="text-lg mt-3">Lead date</h4>
        <input
          type="date"
          pattern="dd/MM/yyyy"
          className="input input-bordered w-full max-w-xs mb-3"
          onChange={(e) => setLeadDate(e.target.value)}
        />

        <h4 className="text-lg">Comment</h4>
        <textarea
          className="textarea textarea-bordered lg:w-80 mb-5"
          placeholder="Type comment here"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <br />
        <button
          className="btn btn-primary mb-5"
          onClick={handleAddCustomerData}
        >
          Add data
        </button>
      </form>
    </div>
  );
};

export default AddCustomerData;
