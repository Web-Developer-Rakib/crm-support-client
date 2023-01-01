import React, { useEffect, useState } from "react";

const Pagination = ({ dataPerPage, getValues, dataLength }) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const endValue = dataPerPage * counter;
    const startValue = endValue - dataPerPage;
    getValues(startValue, endValue);
  }, [counter]);
  const handleInc = () => {
    const totalNumberOfPages = Math.ceil(dataLength / dataPerPage);
    if (counter === totalNumberOfPages) {
      setCounter(totalNumberOfPages);
    } else {
      setCounter(counter + 1);
    }
  };
  const handleDec = () => {
    if (counter === 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="btn-group d-flex justify-between w-full my-5">
      <button className="btn btn-outline" onClick={handleDec}>
        Previous
      </button>
      <button className="btn btn-outline" onClick={handleInc}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
