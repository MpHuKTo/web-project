import React, { createContext, useContext, useState } from "react"

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [dataArray, setDataArray] = useState([])

  const addData = (newData) => {
    setDataArray((prevArray) => [...prevArray, newData])
  };

  return (
    <DataContext.Provider value={{ dataArray, addData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext)