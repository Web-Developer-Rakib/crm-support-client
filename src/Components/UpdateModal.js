import React from "react";

const UpdateModal = () => {
  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className=" text-xl font-bold mb-3 text-center">
            UPDATE CUSTOMER DATA
          </h2>
          <form className="flex justify-center">
            <div>
              <h4 className="text-lg font-semibold">Customer name</h4>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs mb-3"
                //   onChange={(e) => setCustomerName(e.target.value)}
              />
              <h4 className="text-lg font-semibold">Contact number</h4>
              <input
                type="number"
                placeholder="Contact number"
                className="input input-bordered w-full max-w-xs mb-3"
                //   onChange={(e) => setContactNumber(e.target.value)}
              />
              <h4 className="text-lg font-semibold">Email</h4>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs mb-3"
                //   onChange={(e) => setEmail(e.target.value)}
              />
              <h4 className="text-lg font-semibold">Status</h4>
              <span className="mr-4">
                Open{" "}
                <input
                  type="radio"
                  name="radio-6"
                  className="radio radio-success"
                  // onClick={() => setStatus("Open")}
                />
              </span>
              <span className="mr-4">
                Close{" "}
                <input
                  type="radio"
                  name="radio-6"
                  className="radio radio-error"
                  // onClick={() => setStatus("Close")}
                />
              </span>
              <span>
                Pending{" "}
                <input
                  type="radio"
                  name="radio-6"
                  className="radio radio-warning"
                  // onClick={() => setStatus("Pending")}
                />
              </span>
              <h4 className="text-lg mt-3 font-semibold">Lead date</h4>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs mb-3"
                //   onChange={(e) => setDate(e.target.value)}
              />

              <h4 className="text-lg font-semibold">Comment</h4>
              <textarea
                className="textarea textarea-bordered mb-5"
                placeholder="Type comment here"
                //   onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <br />
              <div className="flex justify-center">
                <button className="btn btn-accent mb-5">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
