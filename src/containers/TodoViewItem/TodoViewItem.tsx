import * as React from 'react';
import { connect } from 'react-redux';
import {
  removeTodo,
  setModalOpen,
  setModalContent,
} from '../../redux/actions';
import { Todo } from '../../api';
import { TodoViewItem } from '../../components/TodoViewItem';
import { TodoEditFormContainer } from '../../containers/TodoEditForm';

interface Props {
  item: Todo & { id: string };
  removeTodo(id: string): () => void;
  openModal(): () => void;
  setModalContent(ModalContent: React.ComponentClass<any> | React.SFC<any>): () => void;
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
    const aContent = (todo) =>
      () => <TodoEditFormContainer todo={todo} />;
    event.stopPropagation();
    this.props.setModalContent(aContent(this.props.item));
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
  openModal: () => dispatch(setModalOpen()),
  setModalContent: (ModalContent: React.ComponentClass<any> | React.SFC<any>) =>
    dispatch(setModalContent({ ModalContent })),
});

export default connect(undefined, mapDispatchToProps)(TodoViewItemContainer);
