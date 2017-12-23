import { createModalState } from './initial-state';
import { ModalActions } from '../actions';
import { ModalState, Action } from '../redux-policy';

export default function todosReducer(state: ModalState = createModalState(), action: Action) {
  switch (action.type) {
    case ModalActions.SET_IS_OPEN: {
      const isOpen = action.payload.isOpen;
      console.log(isOpen);
      return Object.assign({}, {
        ...state,
        isOpen,
      });
    }
    case ModalActions.SET_CONTENT: {
      const content = action.payload.content;

      return Object.assign({}, {
        ...state,
        content,
      });
    }
    default: {
      return state;
    }
  }
}
