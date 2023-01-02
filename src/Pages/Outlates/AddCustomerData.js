import React, { useState } from "react";
import { toast } from "react-toastify";
import useUser from "../../Hooks/useUser";

const AddCustomerData = () => {
  const { user } = useUser();
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");
  const personIncharge = user.name;
  const inchargeUsername = user.userName;
  const dateSplited = date.split("-");

  const year = dateSplited[0];
  let month = dateSplited[1];
  if (month === "01") {
    month = "Jan";
  } else if (month === "02") {
    month = "Feb";
  } else if (month === "03") {
    month = "Mar";
  } else if (month === "04") {
    month = "Apr";
  } else if (month === "05") {
    month = "May";
  } else if (month === "06") {
    month = "Jun";
  } else if (month === "07") {
    month = "Jul";
  } else if (month === "08") {
    month = "Aug";
  } else if (month === "09") {
    month = "Sep";
  } else if (month === "10") {
    month = "Oct";
  } else if (month === "11") {
    month = "Nov";
  } else {
    month = "Dec";
  }
  const day = dateSplited[2];
  const leadDate = day + " " + month + " " + year;

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
      fetch(`${process.env.REACT_APP_Server_Link}/post-customer-details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerDetails),
      })
        .then((response) => response.json())
        .then(() => {
          setCustomerName("");
          setComment("");
          setStatus("");
          setContactNumber("");
          setEmail("");
          toast.success("Customer added successfully.");
        })
        .catch(() => {
          toast.error("Something went wrong.");
        });
    }
  };
  return (
    <div className="mt-10">
      <h2 className="my-5 text-2xl text-center">ADD CUSTOMER DATA</h2>
      <form>
        <div className="flex flex-wrap lg:w-[500px] justify-between">
          <div>
            <h4 className="text-lg font-semibold">Customer name</h4>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs mb-3"
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <h4 className="text-lg font-semibold">Contact number</h4>
            <input
              type="number"
              placeholder="Contact number"
              className="input input-bordered w-full max-w-xs mb-3"
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <h4 className="text-lg font-semibold">Email</h4>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Status</h4>
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
            <h4 className="text-lg mt-3 font-semibold">Lead date</h4>
            <input
              type="date"
              className="input input-bordered w-full max-w-xs mb-3"
              onChange={(e) => setDate(e.target.value)}
            />

            <h4 className="text-lg font-semibold">Comment</h4>
            <textarea
              className="textarea textarea-bordered mb-5"
              placeholder="Type comment here"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <br />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="btn btn-primary mb-5"
            onClick={handleAddCustomerData}
          >
            Add data
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomerData;
