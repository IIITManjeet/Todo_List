import { Button } from 'react-bootstrap';
import React from 'react';
import { BsX, BsCheck, BsTrash } from "react-icons/bs";
import db from '../firebase';
const Todo = ({ item, index, todos, setTodos }) => {
  const completeHandler = () => {
    if (item.data().completed === true)
      db.collection("todos").doc(item.id).update({ completed: false });
    else db.collection("todos").doc(item.id).update({ completed: true });
    //let newTodos = [...todos];
    //newTodos.map((el, i) => {
      //if (i === index) {
        //newTodos[i].completed = !newTodos[i].completed;
      //}
      //return el;
    //})
    //setTodos([...newTodos])
  };
  const deleteHandler = () => {
    db.collection("todos").doc(item.id).delete();
    //let newTodos = [...todos];
    //newTodos = newTodos.filter((el, i) => i !== index);
    //setTodos([...newTodos]);
  };
  let completed = item.data().completed;
  return (
    <div className='d-flex justify-content-between'>
      {
        completed ? (
          <>
            <p style={{ textDecoration: "line-through" }}>{item.data().text}</p>
            <div>
              <Button onClick={completeHandler} variant="outline-warning" className="mr-3"><BsX /></Button>
              <Button onClick={deleteHandler} variant="outline-danger"><BsTrash /></Button>
            </div>
          </>
        ) : (
          <>
            <p>{item.data().text}</p>
            <div>
              <Button onClick={completeHandler} variant="outline-success" className="mr-3"><BsCheck /></Button>
              <Button onClick={deleteHandler} variant="outline-danger"><BsTrash /></Button>
            </div>
          </>
        )
      }
    </div>);
};
export default Todo;