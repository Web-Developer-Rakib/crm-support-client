import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUser from "../../Hooks/useUser";

const AddCustomerData = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [cbDate, setCbDate] = useState("");
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
    cbDate,
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
          navigate(0);
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
        <div className="flex flex-wrap lg:w-[700px] justify-between">
          <div>
            <h4 className="text-lg font-semibold">Customer name</h4>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered max-w-xs mb-3 w-80"
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
            <h4 className="text-lg font-semibold">Comment</h4>
            <textarea
              className="textarea textarea-bordered mb-5 w-80"
              placeholder="Type comment here"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
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
            <h4 className="text-lg mt-3 font-semibold">Call back date</h4>
            <input
              type="date"
              className="input input-bordered w-full max-w-xs mb-3"
              onChange={(e) => setCbDate(e.target.value)}
            />
            <button
              className="btn btn-primary mt-10 w-full"
              onClick={handleAddCustomerData}
            >
              Add data
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCustomerData;
