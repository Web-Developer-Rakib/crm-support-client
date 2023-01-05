import React from "react";
import { CSVLink } from "react-csv";
import { FaArrowDown } from "react-icons/fa";
import DataRow from "../../Components/DataRow";
import DeleteModal from "../../Components/DeleteModal";
import Pagination from "../../Components/Pagination";
import ViewModal from "../../Components/ViewModal";
import useAllCustomers from "../../Hooks/useAllCustomers";
import useDeleteCustomer from "../../Hooks/useDeleteCustomer";
import usePagination from "../../Hooks/usePagination";
import useSingleCustomer from "../../Hooks/useSingleCustomer";

const AllData = () => {
  const { customers, setFilterStatus, filterStatus } = useAllCustomers();
  const { dataPerPage, values, getValues } = usePagination();
  const { onDeleteClicked, onDeleteConfirmed } = useDeleteCustomer();
  const { singleCustomer, handleView } = useSingleCustomer();
  const dataLength = customers.length;
  const totalNumberOfPages = Math.ceil(dataLength / dataPerPage);
  const csvHeader = [
    { label: "id", key: "_id" },
    { label: "Customer Name", key: "customerName" },
    { label: "Contact Number", key: "contactNumber" },
    { label: "Email", key: "email" },
    { label: "Status", key: "status" },
    { label: "Lead Date", key: "leadDate" },
    { label: "Person Incharge", key: "personIncharge" },
    { label: "Incharge Username", key: "inchargeUsername" },
    { label: "Comment", key: "comment" },
  ];
  return (
    <div>
      <div className="flex justify-between align-middle">
        <h1 className="text-2xl">{filterStatus} data</h1>
        <div className="flex justify-center items-center">
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
          <CSVLink
            data={customers}
            headers={csvHeader}
            filename={"customers data.csv"}
          >
            <button className="btn btn-outline">
              <FaArrowDown></FaArrowDown>
            </button>
          </CSVLink>
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
          {customers.length > 0 && (
            <tbody>
              {customers
                .slice(values.startValue, values.endValue)
                .map((customer) => (
                  <DataRow
                    customer={customer}
                    handleView={handleView}
                    onDeleteClicked={onDeleteClicked}
                  ></DataRow>
                ))}
            </tbody>
          )}
        </table>
        {customers.length === 0 && (
          <p className="text-center text-lg font-bold mt-5">
            No data available. Please insert.
          </p>
        )}
      </div>
      {totalNumberOfPages > 1 && (
        <Pagination
          dataPerPage={dataPerPage}
          getValues={getValues}
          dataLength={dataLength}
        ></Pagination>
      )}
      <ViewModal singleCustomer={singleCustomer}></ViewModal>
      <DeleteModal onDeleteConfirmed={onDeleteConfirmed}></DeleteModal>
    </div>
  );
};

export default AllData;
