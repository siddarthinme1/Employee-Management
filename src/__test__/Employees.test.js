import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Employees from "../Pages/Employees/Employees";
import useTable from "../Components/useTable";

describe("Testing the Employee page", () => {
  test("testing the employees page is rendered", () => {
    const employees = {};
    const headCells = [
      { id: "id", label: "ID" },
      { id: "gender", label: "Gender" },
      { id: "fullName", label: "Full Name" },
      { id: "phone", label: "Phone" },
      { id: "mail", label: "Email" },
      { id: "birthday", label: "Birthday" },
      { id: "blood", label: "Blood" },
      { id: "address", label: "Address" },
      { id: "emergency", label: "Emergency Contact Details" },
      { id: "", label: "" },
    ];
    render(
      <Employees>
        <useTable employees={employees} headCells={headCells} />
      </Employees>
    );
    const all = screen.getByText(" Search Employee");
    console.log("all", all);
    screen.debug(debug(), 20000);
    // const placeHolderText = screen.getByPlaceholderText("Search");
    // expect(placeHolderText).toBeInTheDocument();
  });
});
