import { useReducer } from "react";

interface State {
  count: number;
}

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] };

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });
  const add30 = () => dispatch({ type: "setCount", value: state.count + 30 });

  return (
    <div>
      <h1>Bienvenido a mi contador</h1>

      <p>Contador: {state.count}</p>
      <button onClick={addFive}>Sumar 5</button>
      <button onClick={reset}>Reiniciar</button>
      <button onClick={add30}>Add 30</button>
    </div>
  );
}
