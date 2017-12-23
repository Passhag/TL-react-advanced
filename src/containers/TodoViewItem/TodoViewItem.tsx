import * as React from 'react';
import { connect } from 'react-redux';
import { removeTodo, updateTodo, setIsOpen, setContent } from '../../redux/actions';
import { Todo } from '../../api';
import { TodoViewItem } from '../../components/TodoViewItem';

const ContentCmp = () => <h1>Modal Content</h1>;

interface Props {
  item: Todo & { id: string };
  removeTodo(id: string): () => void;
  updateTodo(todo: Todo): () => void;
  openModal(): any;
  setModalContent(arg: any): any;
}

class TodoViewItemContainer extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);

    this.handleDeleteBtnOnClick = this.handleDeleteBtnOnClick.bind(this);
    this.handleEditBtnOnClick = this.handleEditBtnOnClick.bind(this);
  }

  handleDeleteBtnOnClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event.stopPropagation();

    this.props.removeTodo(this.props.item.id);
  }

  handleEditBtnOnClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event.stopPropagation();
    this.props.setModalContent(ContentCmp);
    this.props.openModal();
  }

  render(): JSX.Element {
    return (
      <TodoViewItem
        item={this.props.item}
        onDeleteBtnClick={this.handleDeleteBtnOnClick}
        onEditBtnClick={this.handleEditBtnOnClick}
      />
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  removeTodo: (id: string) => dispatch(removeTodo(id)),
  updateTodo: (todo: Todo) => dispatch(updateTodo(todo)),
  openModal: () => dispatch(setIsOpen(true)),
  setModalContent: (ContentCmp) => dispatch(setContent(ContentCmp)),
});

export default connect(undefined, mapDispatchToProps)(TodoViewItemContainer);
