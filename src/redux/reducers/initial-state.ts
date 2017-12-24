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
  ModalContent: null,
});

export {
  createTodosState,
  createTodosFormState,
  createModalState,
};
