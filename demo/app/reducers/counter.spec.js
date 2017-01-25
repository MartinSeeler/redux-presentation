import {describe} from 'ava-spec';
import deepFreeze from 'deep-freeze';
import reducer, {actions} from './counter';

describe('The counter value', it => {
  it('is incremented after an INCREMENT action', f => {
    const stateBefore = {value: 0, operations: 0};
    const action = actions.increment();
    const stateAfter = {value: 1, operations: 1};

    deepFreeze(stateBefore);
    deepFreeze(action);
    deepFreeze(stateAfter);

    f.deepEqual(reducer(stateBefore, action), stateAfter);
  });
  it('is decremented after a DECREMENT action', f => {
    const stateBefore = {value: 0, operations: 0};
    const action = actions.decrement();
    const stateAfter = {value: -1, operations: 1};

    deepFreeze(stateBefore);
    deepFreeze(action);
    deepFreeze(stateAfter);

    f.deepEqual(reducer(stateBefore, action), stateAfter);
  });
});

describe('The operations counter', it => {
  it('is incremented after an INCREMENT action', f => {
    const stateBefore = {value: 0, operations: 0};
    const action = actions.increment();
    const stateAfter = {value: 1, operations: 1};

    deepFreeze(stateBefore);
    deepFreeze(action);
    deepFreeze(stateAfter);

    f.deepEqual(reducer(stateBefore, action), stateAfter);
  });
  it('is incremented after a DECREMENT action', f => {
    const stateBefore = {value: 0, operations: 0};
    const action = actions.decrement();
    const stateAfter = {value: -1, operations: 1};

    deepFreeze(stateBefore);
    deepFreeze(action);
    deepFreeze(stateAfter);

    f.deepEqual(reducer(stateBefore, action), stateAfter);
  });
});
