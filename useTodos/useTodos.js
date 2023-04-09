import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

//
export const useTodos = (initialState = []) => {
  //argumentos de useReducer
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  //useReducer
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  //despues de cada renderizado de todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //funcion para añadir nueva tarea al arreglo de todo
  //se manda la accion al reducer con el dispatch
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  //funcion para añadir eliminar tarea del arreglo de todo´s
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  //funcion para modificar tarea del arreglo de todo´s
  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  //tareas pendientes
  const pendingTodosCount = () => {
    // let pendientes = 0;
    // for (let i in todos) {
    //   if (!todos[i].done) {
    //     pendientes++;
    //   }
    // }
    // return pendientes;
    //return todos.filter((todo) => !todo.done).length;
  };
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
