import { useState } from "react";

const usePagination = () => {
  const dataPerPage = 6;
  const [values, setValues] = useState({
    startValue: 0,
    endValue: dataPerPage,
  });
  const getValues = (startValue, endValue) => {
    setValues({ startValue: startValue, endValue: endValue });
  };
  return { dataPerPage, values, getValues };
};

export default usePagination;
