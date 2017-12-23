import * as React from 'react';
import { connect } from 'react-redux';
import { AppState, ModalState } from '../../redux/redux-policy';
import { setIsOpen } from '../../redux/actions';
import { Modal } from '../../components/common/Modal';

interface Props {
  modal: ModalState;
  closeModal: () => void;
}

export class ModalContainer extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnClose(e: any): void {
    e.stopPropagation();
    this.props.closeModal();
  }

  render(): JSX.Element {
    return (
      <Modal
        isOpen={this.props.modal.isOpen}
        Content={this.props.modal.content}
        onCancel={this.handleOnClose}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  modal: state.modalState,
});

const mapDispatchToProps = (dispatch: Function) => ({
  closeModal: () => dispatch(setIsOpen(false)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
