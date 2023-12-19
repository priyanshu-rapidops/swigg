const initalState = 0;

const cartReducer = (state = initalState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADDITEMS":
      return state.items.push(action.payload);
    case "REMOVEITEMS":
      return state.items.pop();
    default:
      return state;
  }
};

export default cartReducer;
