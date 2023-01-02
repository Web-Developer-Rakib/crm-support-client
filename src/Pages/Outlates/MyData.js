import React from "react";
import DataRow from "../../Components/DataRow";
import DeleteModal from "../../Components/DeleteModal";
import Pagination from "../../Components/Pagination";
import UpdateModal from "../../Components/UpdateModal";
import Modal from "../../Components/ViewModal";
import useAllCustomers from "../../Hooks/useAllCustomers";
import usePagination from "../../Hooks/usePagination";
import useSingleCustomer from "../../Hooks/useSingleCustomer";
import useUser from "../../Hooks/useUser";

const MyData = () => {
  const { user } = useUser();
  const { customers } = useAllCustomers();
  const { dataPerPage, values, getValues } = usePagination();
  const { singleCustomer, handleView } = useSingleCustomer();
  const myData = customers.filter(
    (customer) => customer.inchargeUsername === user.userName
  );
  const dataLength = myData.length;
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myData
              .slice(values.startValue, values.endValue)
              .map((customer) => (
                <DataRow customer={customer} handleView={handleView}></DataRow>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        dataPerPage={dataPerPage}
        getValues={getValues}
        dataLength={dataLength}
      ></Pagination>
      <Modal singleCustomer={singleCustomer}></Modal>
      <UpdateModal></UpdateModal>
      <DeleteModal></DeleteModal>
    </div>
  );
};

export default MyData;
