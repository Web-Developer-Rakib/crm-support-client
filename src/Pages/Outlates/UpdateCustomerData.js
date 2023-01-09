import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAllCustomers from "../../Hooks/useAllCustomers";
import useUser from "../../Hooks/useUser";

const UpdateCustomerData = () => {
  const [status, setStatus] = useState("");

  const { customers } = useAllCustomers();
  const { cid } = useParams();
  const { user } = useUser();

  const matchedCustomer = customers.find((customer) => customer._id === cid);
  const personIncharge = user.name;
  const inchargeUsername = user.userName;

  const handleUpdateCustomerData = (e) => {
    e.preventDefault();
    const cid = matchedCustomer._id;
    const customerName = e.target.name.value;
    const contactNumber = e.target.number.value;
    const email = e.target.email.value;
    const status = e.target.status.value;
    const leadDate = e.target.date.value;
    const cbDate = e.target.cbdate.value;
    const comment = e.target.comment.value;
    const updatedCustomer = {
      cid,
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
    fetch(`${process.env.REACT_APP_Server_Link}/update-customer`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCustomer),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Custmer updated successfully.");
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };
  return (
    <div className="mt-10">
      <h2 className="my-5 text-2xl text-center">UPDATE CUSTOMER DATA</h2>
      <form onSubmit={handleUpdateCustomerData}>
        <div className="flex flex-wrap lg:w-[700px] justify-between">
          <div>
            <h4 className="text-lg font-semibold">Customer name</h4>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered max-w-xs mb-3 w-80"
              defaultValue={matchedCustomer?.customerName}
            />
            <h4 className="text-lg font-semibold">Contact number</h4>
            <input
              type="number"
              name="number"
              placeholder="Contact number"
              defaultValue={matchedCustomer?.contactNumber}
              className="input input-bordered w-full max-w-xs mb-3"
            />
            <h4 className="text-lg font-semibold">Email</h4>
            <input
              type="email"
              placeholder="Email"
              name="email"
              defaultValue={matchedCustomer?.email}
              className="input input-bordered w-full max-w-xs mb-3"
            />
            <h4 className="text-lg font-semibold">Comment</h4>
            <textarea
              className="textarea textarea-bordered mb-5 w-80"
              name="comment"
              defaultValue={matchedCustomer?.comment}
              placeholder="Type comment here"
            ></textarea>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Status</h4>
            <input
              type="text"
              name="status"
              className="input input-bordered w-full max-w-xs mb-3 hidden"
              defaultValue={status === "" ? matchedCustomer?.status : status}
            />
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
              type="text"
              name="date"
              className="input input-bordered w-full max-w-xs mb-3"
              defaultValue={matchedCustomer?.leadDate}
            />
            <h4 className="text-lg mt-3 font-semibold">Call back date</h4>
            <input
              type="text"
              name="cbdate"
              className="input input-bordered w-full max-w-xs mb-3"
              defaultValue={matchedCustomer?.cbDate}
            />
            <button className="btn btn-primary mt-10 w-full">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCustomerData;
