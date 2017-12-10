import * as React from 'react';
import { connect } from 'react-redux';
import { keyBoardEventHandler, KeyValues } from '../../utils';
import { Todo } from '../../api';
import { AppState, TodosFormState } from '../../redux/redux-policy';
import { createTodo, setTodo } from '../../redux/actions';
import { TextField } from '../../components/common/TextField';

interface Props {
  form: TodosFormState;
  createTodo(todo: Todo): () => void;
  setTodo(todo: Todo): () => void;
}

export class TodoFormContainer extends React.Component<Props, {}> {
  public keyBoardEventHandlerOnEnter: (...args: any[]) => void;

  constructor(props: Props) {
    super(props);

    this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
    this.handleSubmitBtnClick = this.handleSubmitBtnClick.bind(this);
    this.keyBoardEventHandlerOnEnter = keyBoardEventHandler
      .bind(null, KeyValues.ENTER, this.handleEnterPress.bind(this));
  }

  handleTodoInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.stopPropagation();

    this.props.setTodo({ content: event.target.value });
  }

  handleEnterPress(event: React.KeyboardEvent<HTMLInputElement>): void {
    event.stopPropagation();

    if (this._isValidForm()) {
      this.props.createTodo(this.props.form.todo as Todo);
    }
  }

  handleSubmitBtnClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event.stopPropagation();

    if (this._isValidForm()) {
      this.props.createTodo(this.props.form.todo as Todo);
    }
  }

  _isValidForm(): boolean {
    return (this.props.form.todo
      && this.props.form.todo.content) ? true : false;
  }

  render(): JSX.Element {
    return (
      <div className="input-group">
        <TextField
          name={'todo'}
          onChange={this.handleTodoInputChange}
          onKeyDown={this.keyBoardEventHandlerOnEnter}
        />
        <button
          type="button"
          className="btn btn-primary input-group-addon"
          onClick={this.handleSubmitBtnClick}
        >
          Send
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  form: state.todosFormState,
});

const mapDispatchToProps = (dispatch: Function) => ({
  createTodo: (todo: Todo) => dispatch(createTodo(todo)),
  setTodo: (todo: Todo) => dispatch(setTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFormContainer);
