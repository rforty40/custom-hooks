export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo, //el todo completo
            done: !todo.done, //se modifica la propiedad del todo
          };
        }
        return todo; //retorna el todo sin modificacion
      });

    default:
      return initialState;
  }
};
