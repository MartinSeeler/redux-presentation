export const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

export const actions = {
  increment: () => ({type: types.INCREMENT}),
  decrement: () => ({type: types.DECREMENT})
};

export const initialState = {
  value: 0,
  operations: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        value: state.value + 1,
        operations: state.operations + 1
      };
    case types.DECREMENT:
      return {
        value: state.value - 1,
        operations: state.operations + 1
      };
    default:
      return state;
  }
};
