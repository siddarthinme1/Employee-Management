import axios from "axios";
import { useState, useEffect } from "react";
import { getBloodCollection, getRelation } from "./EmployeeServiceData";

const API_URL = "http://localhost:8080/employees";

const useEmployeeServices = () => {
  const [employeeListUpdated, setEmployeeListUpdated] = useState(false);
  const bloods = getBloodCollection();
  const relations = getRelation();

  const addEmployee = async (values, res) => {
    console.log("values =", values);
    try {
      const response = await axios.post(API_URL, values);
      console.log("addEmployee = ", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
      values.status(500).send("Failed to fetch activity please try again!");
    }
  };

  const useAllEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      axios
        .get(API_URL)
        .then((response) => {
          setEmployees(response.data);
          console.log("useAllEmployees = ", response.data);
        })
        .catch((error) => {
          console.error("Failed to make request : ", error.message);
        });
    }, [employeeListUpdated]);

    const employeesWithBlood = employees.map((x) => ({
      ...x,
      blood: bloods[x.bloodId - 1]?.title,
      relation: relations[x.relationxId - 1]?.title,
    }));

    return employeesWithBlood;
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      console.log("deleteEmployee = ", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  const updateEmployee = async (values) => {
    console.log("values =", values);
    try {
      const response = await axios.put(`${API_URL}/${values.id}`, values);
      console.log("updateEmployee = ", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  const useBinEmployees = () => {
    const [binEmployees, setBinEmployees] = useState([]);
    useEffect(() => {
      axios
        .get(`${API_URL}/bin/`)
        .then((response) => {
          setBinEmployees(response.data);
          console.log("useBinEmployees = ", response.data);
        })
        .catch((error) => {
          console.error("Failed to make request : ", error.message);
        });
    }, [employeeListUpdated]);

    const employeesWithBlood = binEmployees.map((x) => ({
      ...x,
      blood: bloods[x.bloodId - 1]?.title,
      relation: relations[x.relationxId - 1]?.title,
    }));

    return employeesWithBlood;
  };

  const emptyRecycleBin = async () => {
    try {
      const response = await axios.delete(`${API_URL}/clearbin/`);
      console.log("emptyRecycleBin", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  const restoreEmployee = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/restore/${id}`);
      setEmployeeListUpdated(!employeeListUpdated);
      console.log("restoreEmployee", response);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  return {
    addEmployee,
    useAllEmployees,
    deleteEmployee,
    updateEmployee,
    useBinEmployees,
    emptyRecycleBin,
    restoreEmployee,
  };
};

export default useEmployeeServices;
