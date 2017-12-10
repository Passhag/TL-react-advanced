import * as React from 'react';
import { connect } from 'react-redux';
import { loadTodos } from '../../redux/actions';
import { AppState, TodosState } from '../../redux/redux-policy';
import { ListView } from '../../components/common/ListView';
import { TodoViewItemContainer } from '../TodoViewItem';

interface Props {
  todos: TodosState;
  loadTodos(filters?: { [key: string]: string }): () => void;
}

class TodoListContainer extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadTodos();
  }

  render(): JSX.Element {
    return (
      <ListView
        ViewItem={TodoViewItemContainer}
        items={this.props.todos.data}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  todos: state.todosState,
});

const mapDispatchToProps = (dispatch: Function) => ({
  loadTodos: (filters?: { [key: string]: string }) => dispatch(loadTodos(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
