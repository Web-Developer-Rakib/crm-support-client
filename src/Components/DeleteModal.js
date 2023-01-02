import React from "react";

const DeleteModal = () => {
  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-xl text-center">Are you sure?</h3>

          <div class="modal-action flex justify-around">
            <button className="btn btn-secondary">Delete</button>
            <label for="delete-modal" class="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
