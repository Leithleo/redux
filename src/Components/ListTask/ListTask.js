import React, { useState } from "react";
import { modifyTask } from "../../redux/actions/Action";
import { useDispatch, useSelector } from "react-redux";
import Addtask from "../Addtask/Addtask";
import Edittask from "../Edittask/Edittask";

const ListTask = ({ todos }) => {
  const dispatch = useDispatch();
  const myTasks = useSelector(state => state.tasks);
  const [filter, setFilter] = useState('');
  const [show, setShow] = useState(false);
  const [appear, setAppear] = useState(false);
  const [isItDone, setIsItDone] = useState('');
  return (
    <div className="todo-list">
      <input type="text" onChange={(e)=> setFilter(e.target.value)} />
      <button onClick={()=>setIsItDone(true)}>done</button>
      <button onClick={()=>setIsItDone(false)}>not done</button>
      
      <button onClick={()=>setIsItDone('')}>clear done</button>

      {myTasks
      .filter((task) => task.description.toLowerCase().includes(filter))
      .filter((tsk) => tsk.isDone === isItDone || isItDone === '')
      .map((task) => 
      <div> 
        <div>{task.id}</div><div>{task.description}</div><div>{task.isDone}</div> 
        <button onClick={()=>setAppear(true)}>Edit Task</button>
      {appear === true && <Edittask taskId={task.id} />}
       </div>)
      }
      <button onClick={()=>setShow(true)}>ADD Task</button>
      {show === true && <Addtask />}
    </div>
  );
};

export default ListTask;
