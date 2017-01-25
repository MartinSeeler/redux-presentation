import React from 'react';
import CurrentNumber from '../containers/CurrentNumber';
import OperationsCounter from '../containers/OperationsCounter';
import NumberButtons from '../containers/NumberButtons';
import SizedImage from '../containers/SizedImage';

const App = () =>
    <div>
      <br/>
      <div className="container-fluid">
        <CurrentNumber />
        <OperationsCounter />
        <NumberButtons />
        <hr/>
        <SizedImage/>
      </div>
    </div>;

export default App;
