import React from "react";

const ViewModal = ({ singleCustomer }) => {
  return (
    <div>
      <input type="checkbox" id="view-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="view-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <span className="text-lg font-bold">Name: </span>
            <span>{singleCustomer.customerName}</span>
          </div>
          <div>
            <span className="text-lg font-bold">Contact Number: </span>
            <span>{singleCustomer.contactNumber}</span>
          </div>
          <div>
            <span className="text-lg font-bold">Email: </span>
            <span>{singleCustomer.email}</span>
          </div>
          <div>
            <span className="text-lg font-bold">Status: </span>
            <span>{singleCustomer.status}</span>
          </div>
          <div>
            <span className="text-lg font-bold">Person incharge: </span>
            <span>{singleCustomer.personIncharge}</span>
          </div>
          <div>
            <span className="text-lg font-bold">Lead date: </span>
            <span>{singleCustomer.leadDate}</span>
          </div>
          <div>
            <span className="text-lg font-bold">Call back date: </span>
            <span>{singleCustomer.cbDate}</span>
          </div>
          <div>
            <span className="text-lg font-bold">Comment: </span>
            <span>{singleCustomer.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
