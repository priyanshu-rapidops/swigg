const initalState = 10;

const incrementAndDecrement = (state = initalState, action) => {
  console.log("initalState", initalState);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

export default incrementAndDecrement;
