import { Action } from '../redux-policy';
import { ModalActions } from './constants';

const setModalOpen = (): Action => ({
  type: ModalActions.SET_MODAL_OPEN,
});

const setModalClose = (): Action => ({
  type: ModalActions.SET_MODAL_CLOSE,
});

const setModalContent = ({ ModalContent }) => ({
  type: ModalActions.SET_CONTENT,
  payload: {
    ModalContent,
  },
});

export {
  setModalOpen,
  setModalClose,
  setModalContent,
};
