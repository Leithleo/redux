import { useState } from "react";
import { editFilter } from "../actions/Action";
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../actions/ActionsTypes";

const initialState = {
    tasks: [
        {
            id: 1,
            description: 'first task',
            isDone: false
        },
        {
            id: 2,
            description: 'second task',
            isDone: true
        },
        {
            id: 3,
            description: 'third task',
            isDone: false
        },
        {
            id: 4,
            description: 'fourth task',
            isDone: false
        }
      
    ]
}

const rootReducer = (state = initialState, action) => {
   
    
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            return {
                tasks : state.tasks.filter(task => task.id !== action.payload.id)
            }
        case EDIT_TASK:
            return {
                tasks : state.tasks.map(task => task.id === action.payload.id ? {...task,id : action.payload.id, description : action.payload.description,isDone : action.payload.isDone} : task)
            }                      
                  
        default:
            return state
    }
}

export default rootReducer;