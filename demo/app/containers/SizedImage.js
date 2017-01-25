import React from 'react';
import {connect} from 'react-redux';

const SizedImage = ({width, height}) =>
    <img src={'http://placekitten.com/g/' + width + '/' + height} alt="PlaceKittens"/>;

const mapStateToProps = state => {
  return {
    width: (state.counter.value * 4) + 300,
    height: (state.counter.value * 2) + 300
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SizedImage);
