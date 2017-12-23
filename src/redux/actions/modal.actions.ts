import { Action } from '../redux-policy';
import { ModalActions } from './constants';

const setIsOpen = (isOpen: boolean): Action => ({
  type: ModalActions.SET_IS_OPEN,
  payload: {
    isOpen,
  },
});

const setContent = (content: React.ComponentClass<any> | React.SFC<any>) => ({
  type: ModalActions.SET_CONTENT,
  payload: {
    content,
  },
});

export {
  setIsOpen,
  setContent,
};
