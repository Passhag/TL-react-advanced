import * as React from 'react';
import { connect } from 'react-redux';
import { AppState, ModalState } from '../../redux/redux-policy';
import { Modal } from '../../components/common/Modal';

interface Props {
  modal: ModalState;
}

class ModalContainer extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    const {
      isOpen,
      ModalContent,
    } = this.props.modal;

    return (
      <div>
        {ModalContent &&
          <Modal
            isOpen={isOpen}
            ModalContent={ModalContent}
          />}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  modal: state.modalState,
});

export default connect(
  mapStateToProps
)(ModalContainer);
