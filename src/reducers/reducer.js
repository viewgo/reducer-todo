export const initialState = [
  {
    task: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    task: "Exile about reducers",
    completed: false,
    id: 3893287589
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    case "SET_COMPLETED":
      return state.map((item, index) => {
        // Find the item with the matching id
        if (item.id === action.payload) {
          // Return a new object
          return {
            ...item, // copy the existing item
            completed: !item.completed // replace the completed
          };
        }
        // Leave every other item unchanged
        return item;
      });

    default:
      throw new Error("No action matched!");
  }
};
