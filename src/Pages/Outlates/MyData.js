import React from "react";
import DataRow from "../../Components/DataRow";
import Modal from "../../Components/Modal";
import useAllCustomers from "../../Hooks/useAllCustomers";
import useSingleCustomer from "../../Hooks/useSingleCustomer";
import useUser from "../../Hooks/useUser";

const MyData = () => {
  const { user } = useUser();
  const { customers } = useAllCustomers();
  const { singleCustomer, handleView } = useSingleCustomer();
  return (
    <div>
      <h1 className="text-left mb-5 ml-5 text-2xl">Added by {user.name}</h1>
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
            {customers.map(
              (customer) =>
                customer.inchargeUsername === user.userName && (
                  <DataRow
                    customer={customer}
                    handleView={handleView}
                  ></DataRow>
                )
            )}
          </tbody>
        </table>
      </div>
      <Modal singleCustomer={singleCustomer}></Modal>
    </div>
  );
};

export default MyData;
