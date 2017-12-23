import {
  TodosState,
  TodosFormState,
  ModalState,
} from '../redux-policy';

const createTodosState = (): TodosState => ({
  data: [],
  loading: false,
  error: null,
});

const createTodosFormState = (): TodosFormState => ({
  todo: null,
});

const createModalState = (): ModalState => ({
  isOpen: false,
  content: null,
});

export {
  createTodosState,
  createTodosFormState,
  createModalState,
};
