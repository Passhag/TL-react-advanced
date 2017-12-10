import { createTodosFormState } from './initial-state';
import { TodosFormActions } from '../actions';
import { TodosFormState, Action } from '../redux-policy';

export default function todosReducer(state: TodosFormState = createTodosFormState(), action: Action) {
  switch (action.type) {
    case TodosFormActions.SET_TODO: {
      const todo = action.payload.data;

      return Object.assign({}, {
        ...state,
        todo,
      });
    }
    default: {
      return state;
    }
  }
}
