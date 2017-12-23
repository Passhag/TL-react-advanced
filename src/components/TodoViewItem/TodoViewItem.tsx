import * as React from 'react';
import { Todo } from '../../api';

interface Props {
  item: Todo;
  onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement>): void;
  onEditBtnClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const TodoViewItem: React.SFC<Props> = ({ item, onDeleteBtnClick, onEditBtnClick }): JSX.Element => {
  return (
    <div className="tl-todo-item">
      <span className="tl-todo-item-text">
        {item.content}
      </span>
      <div className="tl-todo-item-actions">
        <button type="button" className="btn btn-link" onClick={onEditBtnClick}>
          <i className="fa fa-pencil" />
        </button>
        <button type="button" className="btn btn-link" onClick={onDeleteBtnClick}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default TodoViewItem;
