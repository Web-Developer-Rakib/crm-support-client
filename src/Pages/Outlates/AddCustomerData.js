import React from "react";

const AddCustomerData = () => {
  return (
    <div>
      <div className="mt-10">
        <form action="">
          <h2 className="my-5 text-2xl">Add customer data</h2>
          <h4 className="text-lg">Customer Name</h4>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs mb-3"
            onChange={(e) => console.log()}
          />
          <h4 className="text-lg">Contact number</h4>
          <input
            type="number"
            placeholder="Contact number"
            className="input input-bordered w-full max-w-xs mb-3"
            onChange={(e) => console.log()}
          />
          <h4 className="text-lg">Email</h4>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs mb-3"
            onChange={(e) => console.log()}
          />
          <h4 className="text-lg">Status</h4>
          <span className="mr-4">
            Open{" "}
            <input
              type="radio"
              name="radio-6"
              className="radio radio-success"
            />
          </span>
          <span className="mr-4">
            Close{" "}
            <input type="radio" name="radio-6" className="radio radio-error" />
          </span>
          <span>
            Pending{" "}
            <input
              type="radio"
              name="radio-6"
              className="radio radio-warning"
            />
          </span>
          <h4 className="text-lg mt-3">Lead date</h4>
          <input
            type="date"
            pattern="dd/MM/yyyy"
            className="input input-bordered w-full max-w-xs mb-3"
            onChange={(e) => console.log()}
          />
          <h4 className="text-lg">Person inCharge</h4>
          <input
            type="text"
            placeholder="Person inCharge"
            className="input input-bordered w-full max-w-xs mb-3"
            onChange={(e) => console.log()}
          />
          <h4 className="text-lg">Comment</h4>
          <textarea
            className="textarea textarea-bordered lg:w-80 mb-5"
            placeholder="Tybe comment here"
          ></textarea>
          <br />
          <button className="btn btn-primary mb-5">Add data</button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerData;
