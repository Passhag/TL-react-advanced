import * as React from 'react';
import { Todo } from '../../api';

interface Props {
  item: Todo;
  handleDeleteBtnOnClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const TodoViewItem: React.SFC<Props> = ({ item, handleDeleteBtnOnClick }): JSX.Element => {
  return (
    <div className="tl-todo-item">
      <span className="tl-todo-item-text">
        {item.content}
      </span>
      <button type="button" className="btn btn-link" onClick={handleDeleteBtnOnClick}>
        <i className="fa fa-trash" />
      </button>
    </div>
  );
};

export default TodoViewItem;
