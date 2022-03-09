import { ADD_TASK, EDIT_TASK} from "./ActionsTypes";

export const addTodo = (newPost) => ({
  type: ADD_TASK,
  payload: newPost,
});


export const modifyTask = (newPost) => ({
  type: EDIT_TASK,
  payload: newPost
});
