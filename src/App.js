import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Input from './Components/Input';
import Search from './Components/Search';
import Todo from './Components/Todo';
import db from './firebase';
const App = () => {
 const [todos, setTodos] = useState([]);
 const [searchInput, setSearchInput] = useState("");
 const [filteredTodos, setFilteredTodos] = useState([]);
 useEffect(() => {
  db.collection("todos")
   .orderBy("time")
   .onSnapshot((snapshot) => {
    console.log(snapshot.docs);
    setTodos([...snapshot.docs]);
   });
 }, []);
 useEffect(() => {
  let filter = [...todos];
  filter = filter.filter((el) => {
   let item = el.data().text.toLowerCase();
   return item.includes(searchInput.toLowerCase());
  });
  setFilteredTodos([...filter]);
 }, [todos, searchInput]
 );
 return (
  <div className='App mx-auto' style={{ maxWidth: "800px" }}>
   <h1 className='text-center m-5'>Todo Application</h1>
   <Container>
    <Row className='mb-5'>
     <Col xs={6} className="text-right">
      <Input todos={todos} setTodos={setTodos} />
     </Col>
     <Col xs={6} className="text=left">
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
     </Col>
    </Row>
    <ListGroup>
     {filteredTodos.map((item, index) => (
      <ListGroup.Item>
       <Todo
        item={item}
        key={index}
        todos={todos}
        index={index}
        setTodos={setTodos} />
      </ListGroup.Item>
     ))}
    </ListGroup>
   </Container>
  </div>
 );
}

export default App;
