import { Action } from '../redux-policy';
import { TodosFormActions } from './constants';
import { Todo } from '../../api';

const setTodo = (todo: Todo): Action => ({
  type: TodosFormActions.SET_TODO,
  payload: {
    data: todo,
  },
});

export {
  setTodo,
};
