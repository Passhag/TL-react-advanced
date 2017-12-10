import * as React from 'react';
import { connect } from 'react-redux';
import { removeTodo, updateTodo } from '../../redux/actions';
import { Todo } from '../../api';
import { TodoViewItem } from '../../components/TodoViewItem';

interface Props {
  item: Todo & { id: string };
  removeTodo(id: string): () => void;
  updateTodo(todo: Todo): () => void;
}

class TodoViewItemContainer extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);

    this.handleDeleteBtnOnClick = this.handleDeleteBtnOnClick.bind(this);
  }

  handleDeleteBtnOnClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event.stopPropagation();

    this.props.removeTodo(this.props.item.id);
  }

  render(): JSX.Element {
    return (
      <TodoViewItem
        item={this.props.item}
        handleDeleteBtnOnClick={this.handleDeleteBtnOnClick}
      />
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  removeTodo: (id: string) => dispatch(removeTodo(id)),
  updateTodo: (todo: Todo) => dispatch(updateTodo(todo)),
});

export default connect(undefined, mapDispatchToProps)(TodoViewItemContainer);
