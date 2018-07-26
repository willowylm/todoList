const initialState = [
  {
    name: "first task",
    completed: false,
    id: 0,
    editable: false
  }
];

const actionTypes = {
  ADD_TODO: "ADD_TODO_ITEM",
  MODIFY_COMPLETED: "MODIFY_COMPLETED",
  COMPLETE_TODO:"COMPLETE_TODO"
};


export default function todos(state = initialState, action) {
    console.log('woshi',action)
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.payload];
    case actionTypes.MODIFY_COMPLETED:
      return [...state, ];
    case actionTypes.COMPLETE_TODO:
      {
          console.log('test')
          return state.map(todo=>(todo.id == action.id)? {...todo,completed : !todo.completed}:todo)
        // const  newState = [...state];
        // const item = newState.find(item => item.id == action.id);
        // item.completed = !item.Ccompleted;
        // return newState;
      }
    default:
      return state;
  }
}
