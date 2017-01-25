import React, {PropTypes} from 'react';
import functional from 'react-functional';
import {Provider} from 'react-redux';
import App from './App';

// class Root extends Component {
//   render() {
//     const {store} = this.props;
//     return (
//         <Provider store={store}>
//           <App/>
//         </Provider>
//     );
//   }
// }
//
// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }

const Root = ({store}) => {
  return (
      <Provider store={store}>
        <App/>
      </Provider>
  );
};

const options = {
  propTypes: {
    store: PropTypes.object.isRequired
  }
};

export default functional(Root, options);
