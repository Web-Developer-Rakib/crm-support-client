import React from "react";
import AllDataRow from "../../Components/AllDataRow";
import useAllCustomers from "../../Hooks/useAllCustomers";

const AllData = () => {
  const { customers } = useAllCustomers();
  return (
    <div>
      <h1 className="text-left mb-5 ml-5 text-2xl">All data</h1>
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
            {customers.map((customer) => (
              <AllDataRow customer={customer}></AllDataRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllData;
