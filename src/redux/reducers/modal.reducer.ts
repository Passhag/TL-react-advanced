import { createModalState } from './initial-state';
import { ModalActions } from '../actions';
import { ModalState, Action } from '../redux-policy';

export default function todosReducer(state: ModalState = createModalState(), action: Action) {
  switch (action.type) {
    case ModalActions.SET_MODAL_OPEN: {
      return Object.assign({}, {
        ...state,
        isOpen: true,
      });
    }
    case ModalActions.SET_MODAL_CLOSE: {
      return Object.assign({}, {
        ...state,
        isOpen: false,
      });
    }
    case ModalActions.SET_CONTENT: {
      const { ModalContent } = action.payload;

      return Object.assign({}, {
        ...state,
        ModalContent,
      });
    }
    default: {
      return state;
    }
  }
}
