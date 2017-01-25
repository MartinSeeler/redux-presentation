import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
import {actions} from '../reducers/counter';

const NumberButtons = ({incFn, decFn}) =>
    <div className="btn-group">
      <Button label="Decrement" onClick={decFn}/>
      <Button label="Increment" onClick={incFn}/>
    </div>;

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    incFn: () => dispatch(actions.increment()),
    decFn: () => dispatch(actions.decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberButtons);
