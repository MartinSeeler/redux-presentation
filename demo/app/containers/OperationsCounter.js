import {connect} from 'react-redux';
import Number from '../components/Number';

const mapStateToProps = state => {
  return {
    x: state.counter.operations,
    text: 'Number of Operations'
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Number);
