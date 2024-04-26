// services/firestore.js
import { db } from "./config";

export const fetchTableData = async () => {
  try {
    const data = [];
    const querySnapshot = await db.collection("tableData").get();
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("Error fetching table data: ", error);
    return [];
  }
};

export const updateTableData = async (id, newData) => {
  try {
    await db.collection("tableData").doc(id).update(newData);
    console.log("Data updated successfully!");
  } catch (error) {
    console.error("Error updating table data: ", error);
  }
};

export const addTableData = async (newData) => {
  try {
    await db.collection("tableData").add(newData);
    console.log("Data added successfully!");
  } catch (error) {
    console.error("Error adding table data: ", error);
  }
};
