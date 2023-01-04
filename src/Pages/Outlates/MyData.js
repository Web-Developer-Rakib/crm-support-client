import React from "react";
import DataRow from "../../Components/DataRow";
import DeleteModal from "../../Components/DeleteModal";
import Pagination from "../../Components/Pagination";
import Modal from "../../Components/ViewModal";
import useAllCustomers from "../../Hooks/useAllCustomers";
import useDeleteCustomer from "../../Hooks/useDeleteCustomer";
import usePagination from "../../Hooks/usePagination";
import useSingleCustomer from "../../Hooks/useSingleCustomer";
import useUser from "../../Hooks/useUser";

const MyData = () => {
  const { user } = useUser();
  const { customers, setFilterStatus } = useAllCustomers();
  const { onDeleteClicked, onDeleteConfirmed } = useDeleteCustomer();
  const { dataPerPage, values, getValues } = usePagination();
  const { singleCustomer, handleView } = useSingleCustomer();
  const myData = customers.filter(
    (customer) => customer.inchargeUsername === user.userName
  );
  const dataLength = myData.length;
  return (
    <div>
      <div className="flex justify-between align-middle">
        <h1 className="text-2xl">Added by {user.name}</h1>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1">
            Filter
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => setFilterStatus("All")}>
              <p>All</p>
            </li>
            <li>
              <p onClick={() => setFilterStatus("Open")}>Open</p>
            </li>
            <li onClick={() => setFilterStatus("Close")}>
              <p>Close</p>
            </li>
            <li onClick={() => setFilterStatus("Pending")}>
              <p>Pending</p>
            </li>
          </ul>
        </div>
      </div>
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
                <DataRow
                  customer={customer}
                  handleView={handleView}
                  onDeleteClicked={onDeleteClicked}
                ></DataRow>
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
      <DeleteModal onDeleteConfirmed={onDeleteConfirmed}></DeleteModal>
    </div>
  );
};

export default MyData;
