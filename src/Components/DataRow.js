import React from "react";

const DataRow = ({ customer, handleView }) => {
  const {
    _id,
    customerName,
    contactNumber,
    email,
    status,
    leadDate,
    personIncharge,
    comment,
  } = customer;

  return (
    <>
      <tr key={_id}>
        <th>{customerName.slice(0, 4)}...</th>
        <td>{contactNumber.slice(0, 5)}...</td>
        <td>{email.slice(0, 4)}..@..com</td>
        <td>
          <p
            className={`${
              status === "Open"
                ? "bg-success"
                : status === "Close"
                ? "bg-error"
                : "bg-warning"
            } p-3 rounded-lg text-center`}
          >
            {status}
          </p>
        </td>
        <td>{leadDate}</td>
        <td>{personIncharge.slice(0, 6)}...</td>
        <td>{comment.slice(0, 10)}...</td>
        <td>
          {/* The button to open modal */}
          <label
            htmlFor="my-modal-3"
            className="btn btn-primary btn-sm"
            onClick={() => handleView(_id)}
          >
            v
          </label>
          <label
            htmlFor="my-modal-3"
            className="btn btn-accent  btn-sm"
            onClick={() => handleView(_id)}
          >
            u
          </label>
          <label
            htmlFor="my-modal-3"
            className="btn btn-secondary btn-sm"
            onClick={() => handleView(_id)}
          >
            d
          </label>
        </td>
      </tr>
    </>
  );
};

export default DataRow;
