import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { db } from '../firebase.js';
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { onValue, ref } from 'firebase/database';
import "./Home.css";

const Home = () => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const firestoreDb = getFirestore();

    const unsubscribe = getDocs(collection(firestoreDb, 'Plant-Leaf')).then((snapshot) => {
      const newData = {};
      snapshot.forEach((doc) => {
        newData[doc.id] = doc.data();
      });

      setData(newData);
    });

    return () => {
      setData({});
    };
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>{data[id].status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
