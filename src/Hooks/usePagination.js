import { useState } from "react";
import useAllCustomers from "./useAllCustomers";

const usePagination = () => {
  const { customers } = useAllCustomers();
  const dataPerPage = 10;
  const dataLength = customers.length;
  const [values, setValues] = useState({
    startValue: 0,
    endValue: dataPerPage,
  });
  const getValues = (startValue, endValue) => {
    setValues({ startValue: startValue, endValue: endValue });
  };
  return { dataPerPage, dataLength, values, getValues };
};

export default usePagination;
