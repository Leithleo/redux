import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {modifyTask} from '../../redux/actions/Action';
import { useDispatch} from "react-redux";
const Edittask = (props) => {
  const [text,setText] = useState('');
  
  const [done,setDone] = useState('');
  const dispatch =useDispatch();
  const handleEdit=()=>{
    dispatch(modifyTask({id :props.taskId, description : text ,isDone : done}));
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
        <button onClick={()=>setDone(true)}> Done? </button>
      <Button variant="primary" type="submit"
      onClick={handleEdit}>
        Edit Task
      </Button>
    </div>
  );
};

export default Edittask;
