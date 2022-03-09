import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {addTodo} from '../../redux/actions/Action';
import { useDispatch,useSelector } from "react-redux";
const Addtask = (props) => {
  const [text,setText] = useState('');
  const dispatch =useDispatch();
  const myTasks = useSelector(state => state.tasks);
  const handleAdd=()=>{
    dispatch(addTodo({id : myTasks.length +1, description : text ,isDone : false}));
  }

  return (
    <div className="addTodos">

      <Form.Control
        name="description"
        type="text"
        placeholder="Task Name"
        type="text"
        onChange={(e)=>setText(e.target.value)}
        className="todo-input"
      />

      <Button variant="primary" type="submit"
      onClick={handleAdd}>
        Add Task
      </Button>
    </div>
  );
};

export default Addtask;
