import React, { useState } from 'react';
import { BsJournalPlus } from "react-icons/bs";
import { InputGroup, Form } from 'react-bootstrap';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import db from '../firebase';
const Input = ({ todos, setTodos }) => {
 const [input, setInput] = useState("");
 const inputHandler = (event) => {
  setInput(event.target.value);
 };
 const submitHandler = () => {
  if (input) {
   db.collection("todos").add(
    {
     text: input,
     completed: false,
     time: firebase.firestore.FieldValue.serverTimestamp(),
    }
   );
   //setTodos([...todos, {
   // text: input,
   // completed: false,
   //}]);
  //
 }
  setInput("");
 };
 return (
  <div>
   <InputGroup>
    <Form.Control type="text" onChange={inputHandler} value={input} />
    <InputGroup.Text onClick={submitHandler}>
     <BsJournalPlus />
    </InputGroup.Text>
   </InputGroup>
  </div>
 )
}

export default Input;