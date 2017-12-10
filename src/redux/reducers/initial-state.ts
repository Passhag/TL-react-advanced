import {
  TodosState,
  TodosFormState,
} from '../redux-policy';

const createTodosState = (): TodosState => ({
  data: [],
  loading: false,
  error: null,
});

const createTodosFormState = (): TodosFormState => ({
  todo: null,
});

export {
  createTodosState,
  createTodosFormState,
};
