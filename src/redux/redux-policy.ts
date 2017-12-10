import { Todo } from '../api';

export interface TodosState  {
  data: any[];
  loading: boolean;
  error: Object | string | null;
}

export interface TodosFormState {
  todo: Todo | null;
}

export interface AppState {
  todosState: TodosState;
  todosFormState: TodosFormState;
}

export interface Action {
  type: string;
  payload?: any;
}
