import React from "react";
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DataRow = ({ customer, handleView, onDeleteClicked }) => {
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
  const navigate = useNavigate();

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
                : "bg-amber-300"
            } p-2 rounded-lg text-center`}
          >
            {status}
          </p>
        </td>
        <td>{leadDate}</td>
        <td>{personIncharge.slice(0, 7)}...</td>
        <td>{comment.slice(0, 6)}...</td>
        <td>
          <label
            htmlFor="view-modal"
            className="btn btn-primary btn-sm"
            onClick={() => handleView(_id)}
          >
            <FaEye></FaEye>
          </label>
          <label
            // htmlFor="update-modal"
            className="btn btn-accent btn-sm"
            onClick={() => navigate(`/dashboard/update-customer/${_id}`)}
          >
            <FaPencilAlt></FaPencilAlt>
          </label>
          <label
            htmlFor="delete-modal"
            className="btn btn-secondary btn-sm"
            onClick={() => onDeleteClicked(_id)}
          >
            <FaTrashAlt></FaTrashAlt>
          </label>
        </td>
      </tr>
    </>
  );
};

export default DataRow;
