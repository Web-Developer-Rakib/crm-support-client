import React from "react";

const AllDataTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact number</th>
            <th>Email</th>
            <th>Status</th>
            <th>Lead date</th>
            <th>Person inCharge</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <tr>
            <th>Pradip Das</th>
            <td>+9175948123</td>
            <td>pradipdas@gmail.com</td>
            <td>
              <p className="bg-lime-500 p-3 rounded-lg">Open</p>
            </td>
            <td>31 Dec 2021</td>
            <td>Kartik Roy</td>
            <td>This is a demo...</td>
            <td>
              <button className="btn btn-primary">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllDataTable;
