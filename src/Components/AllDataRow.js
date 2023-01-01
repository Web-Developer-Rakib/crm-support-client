import React from "react";

const AllDataRow = ({ customer }) => {
  const {
    customerName,
    contactNumber,
    email,
    status,
    leadDate,
    personIncharge,
    comment,
  } = customer;
  console.log(customer);
  return (
    <tr>
      <th>{customerName.slice(0, 6)}...</th>
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
      <td>{comment.slice(0, 20)}</td>
      <td>
        <button className="btn btn-primary">View</button>
      </td>
    </tr>
  );
};

export default AllDataRow;
