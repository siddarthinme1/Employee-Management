import axios from "axios";
import { useState, useEffect } from "react";
import { getBloodCollection, getRelation } from "./EmployeeServiceData";

const API_URL = "http://localhost:8080/api/employees";
const bearerToken = "Bearer" + sessionStorage.getItem("login");

const useEmployeeServices = () => {
  const [employeeListUpdated, setEmployeeListUpdated] = useState(false);
  const bloods = getBloodCollection();
  const relations = getRelation();

  const addEmployee = async (values) => {
    console.log("values =", values);
    try {
      const response = await axios.post(API_URL, values, {
        headers: {
          Authorization: `${bearerToken}`,
        },
      });
      console.log("addEmployee =", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request:", error.message);
    }
  };

  const useAllEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      const fetchEmployees = async () => {
        try {
          const response = await axios.get(API_URL, {
            headers: {
              Authorization: `${bearerToken}`,
            },
          });
          console.log(response);
          setEmployees(response.data);
        } catch (error) {
          console.error("Failed to make request: ", error.message);
        }
      };
      fetchEmployees();
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
      const response = await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `${bearerToken}`,
        },
      });
      console.log("deleteEmployee = ", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  const updateEmployee = async (values) => {
    console.log("values =", values);
    try {
      const response = await axios.put(`${API_URL}/${values.id}`, values, {
        headers: {
          Authorization: `${bearerToken}`,
        },
      });
      console.log("updateEmployee = ", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  const useBinEmployees = () => {
    const [binEmployees, setBinEmployees] = useState([]);

    useEffect(() => {
      const fetchBinEmployees = async () => {
        try {
          const response = await axios.get(`${API_URL}/bin/`, {
            headers: {
              Authorization: `${bearerToken}`,
            },
          });
          console.log(response);
          setBinEmployees(response.data);
        } catch (error) {
          console.error("Failed to make request: ", error.message);
        }
      };
      fetchBinEmployees();
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
      const response = await axios.delete(`${API_URL}/clearBin/`, {
        headers: {
          Authorization: `${bearerToken}`,
        },
      });
      console.log("emptyRecycleBin", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  const restoreEmployee = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/restore/${id}`, {
        headers: {
          Authorization: `${bearerToken}`,
        },
      });
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
