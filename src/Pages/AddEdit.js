import React, { useState } from "react";
import { toast } from "react-toastify";
import { initializeApp } from 'firebase/app';
import { useNavigate } from 'react-router-dom';
import "./AddEdit.css";
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../firebase.js'

const initialState = {
  name: "",
  email: "",
  contact: "",
};


const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { name, email, contact } = state;  

  const history = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !contact) {
      toast.error("Please provide a value in each input field");
    } else {
      try {
        const docRef = await addDoc(collection(db, 'Plant-Leaf'), state);
        toast.success("Contact Added Successfully");
        setTimeout(() => {history("/");}, 500);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeHolder="Your Name..."
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeHolder="Your Email..."
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="name">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeHolder="Your contact..."
          value={contact}
          onChange={handleInputChange}
        />
         <input type="submit" value={"Save"} />
      </form>
    </div>
  );
    
};

export default AddEdit;
