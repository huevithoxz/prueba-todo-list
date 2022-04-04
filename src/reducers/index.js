const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case "DELETE_TASK":
      return {
        ...state,
        task: state.task.filter((item) => item.title !== action.payload),
      };

    default:
      return state;
  }
};
export default reducer;
