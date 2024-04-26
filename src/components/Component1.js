import React, { useState , useEffect } from "react";
import { cn } from "../utils/cn";

import firebase from "firebase/compat/app"; // Change import statement
import "firebase/compat/firestore"; // Change import statement


const firebaseConfig = {
  apiKey: "AIzaSyDOXk9GZZS9qpVeVGpZYI8HWjy0EH6kWaE",
  authDomain: "mynewsscrap.firebaseapp.com",
  projectId: "mynewsscrap",
  storageBucket: "mynewsscrap.appspot.com",
  messagingSenderId: "483322562801",
  appId: "1:483322562801:web:16285ed3b784d8b25c8150",
  measurementId: "G-59SXR4L0LS"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

// Function component for rendering Component - 1
export function Component1(isFileDragging, fileW) {

  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "", age: "" });

  useEffect(() => {
    const unsubscribe = db.collection("tableData").onSnapshot((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setTableData(data);
    });
  
    return () => unsubscribe();
  }, []);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Validation for name input
    if (name === "name") {
      // You can add your validation logic here, for example:
      if (value.length > 50) {
        // Display error message or handle the error as per your requirement
        return;
      }
    }
    
    // Validation for age input (accept only numbers)
    if (name === "age") {
      // Check if the value is a number using regular expression
      if (!/^\d+$/.test(value)) {
        // Display error message or handle the error as per your requirement
        return;
      }
    }
  
    // Update the form data state
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await db.collection("tableData").doc(formData.id).update({
          name: formData.name,
          age: formData.age
        });
        console.log("Data updated successfully!");
      } else {
        await db.collection("tableData").add({
          name: formData.name,
          age: formData.age
        });
        console.log("Data added successfully!");
      }
      setFormData({ id: "", name: "", age: "" });
    } catch (error) {
      console.error("Error adding/updating table data: ", error);
    }
  };

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
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
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



