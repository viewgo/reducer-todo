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
    

    case "ADD_TODO":
        const newTodo = {
          task: action.payload,
          id: Date.now(),
          completed: false
        };

        console.log("reducer newTodo: ", newTodo);
        return [    // a new array
          ...state, // explode the old state first
          newTodo   // then add the new item at the end
        ];

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
