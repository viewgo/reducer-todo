export const initialState = [
  {
    task: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    task: "Read about reducers",
    completed: false,
    id: 3893287589
  },
  {
    task: "Complain about reducers",
    completed: false,
    id: 6393287589
  },
  {
    task: "Die about reducers",
    completed: false,
    id: 5893287589
  },
  {
    task: "What",
    completed: false,
    id: 4893287589
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        task: action.payload,
        id: Date.now(),
        completed: false
      };

      return [...state, newTodo];

    case "CLEAR":
      const result = state.filter(item => item.completed === false);

      return result;

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
