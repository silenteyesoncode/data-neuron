import React, { useState } from "react";
import { cn } from "../utils/cn";

// Function component for rendering Component - 1
export function Component1(isFileDragging, fileW) {
  // State to manage table data
  const [tableData, setTableData] = useState([
    // { id: 1, name: "John Doe", age: 30 },
    // { id: 2, name: "Jane Smith", age: 25 },
  ]);

  // State to manage form inputs for adding/editing table data
  const [formData, setFormData] = useState({ id: "", name: "", age: "" });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission for adding/editing table data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Edit existing data
      const updatedData = tableData.map((item) =>
        item.id === formData.id ? { ...item, name: formData.name, age: formData.age } : item
      );
      setTableData(updatedData);
    } else {
      // Add new data
      const newId = tableData.length + 1;
      setTableData([...tableData, { id: newId, name: formData.name, age: formData.age }]);
    }
    // Reset form data
    setFormData({ id: "", name: "", age: "" });
  };

  // Function to handle edit button click
  const handleEdit = (data) => {
    setFormData({ ...data });
  };

  return (
    <div
      className={cn("shrink-0 contents", isFileDragging && "dragging")}
      style={{ width: fileW }}
    >
      {/* Table */}
      <table style={{ borderCollapse: 'collapse', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#000000' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Age</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id} style={{ border: '1px solid #ddd' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.age}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {/* Edit button */}
                <button 
                  onClick={() => handleEdit(item)} 
                  style={{ padding: '5px 10px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {/* Form for adding/editing data */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
        <input 
          type="hidden" 
          name="id" 
          value={formData.id} 
          onChange={handleInputChange} 
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Age:</label>
          <input 
            type="text" 
            name="age" 
            value={formData.age} 
            onChange={handleInputChange} 
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} 
          />
        </div>
        <button 
          type="submit" 
          style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}
        >
          {formData.id ? "Edit" : "Add"}
        </button>
      </form>

    </div>
  );
}


