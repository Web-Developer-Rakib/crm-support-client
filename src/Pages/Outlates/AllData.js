import React from "react";
import DataRow from "../../Components/DataRow";
import DeleteModal from "../../Components/DeleteModal";
import Pagination from "../../Components/Pagination";
import UpdateModal from "../../Components/UpdateModal";
import ViewModal from "../../Components/ViewModal";
import useAllCustomers from "../../Hooks/useAllCustomers";
import usePagination from "../../Hooks/usePagination";
import useSingleCustomer from "../../Hooks/useSingleCustomer";

const AllData = () => {
  const { customers } = useAllCustomers();
  const { dataPerPage, values, getValues } = usePagination();
  const { singleCustomer, handleView } = useSingleCustomer();
  const dataLength = customers.length;
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers
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
      <ViewModal singleCustomer={singleCustomer}></ViewModal>
      <UpdateModal></UpdateModal>
      <DeleteModal></DeleteModal>
    </div>
  );
};

export default AllData;
