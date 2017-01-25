import {connect} from 'react-redux';
import Number from '../components/Number';

const mapStateToProps = state => {
  return {
    x: state.counter.value,
    text: 'The current value is'
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Number);
