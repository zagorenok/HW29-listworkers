import React, { useState } from "react";
import "./App.css";
import data from "./mock-data.json";

const App = () => {
const [workers, setWorkers] = useState(data);
const [addFormData, setAddFormData] = useState({
  workingdays: "",
  rate: "",
  salary: ""
});

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

return (
  <div className="app-container">
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>surname</th>
          <th>workingdays</th>
          <th>rate, UAH</th>
          <th>salary, UAH</th>
        </tr>
      </thead>
      <tbody>
        {workers.map((worker) => (
          <tr>
            <td>{worker.name}</td>
            <td>{worker.surname}</td>
            <td>
              <input
                name="number"
                required="required"
                defaultValue={worker.workingdays}
                placeholder="Please enter workingdays..."
                onChange={handleAddFormChange}
              />
            </td>
            <td>
              <input
                name="number"
                required="required"
                defaultValue={worker.rate}
                placeholder="Please enter rate..."
                onChange={handleAddFormChange}
              />
            </td>
            <td>{worker.workingdays * worker.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default App;
