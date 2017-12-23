import * as React from 'react';
// import { connect } from 'react-redux';
import { TextField } from '../../components/common/TextField';

export class TodoEditFormContainer extends React.Component<{}, {}> {
  render() {
    return (
      <TextField name="todo" />
    );
  }
}

// export default connect(
//   {}, 
//   {}
// )(TodoEditFormContainer);