import * as React from 'react';
import { connect } from 'react-redux';
import {
  setModalClose,
} from '../../redux/actions';
import { Todo } from '../../api';
// import { TextField } from '../../components/common/TextField';

interface Props {
  todo: Todo;
  closeModal: () => void;
}

class TodoEditFormContainer extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onCloseModal(event: React.MouseEvent<HTMLButtonElement>): void {
    event.stopPropagation();
    this.props.closeModal();
  }

  render() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            {'Edit Todo'}
          </h5>
          <button type="button" className="close" onClick={this.onCloseModal}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {this.props.todo.content}
          {/* <TextField name="todo" /> */}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.onCloseModal}>
            {'Close'}
          </button>
          <button type="button" className="btn btn-primary">
            {'Save changes'}
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  closeModal: () => dispatch(setModalClose()),
});

export default connect(
  undefined,
  mapDispatchToProps
)(TodoEditFormContainer);