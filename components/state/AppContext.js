import { useReducer, useContext, createContext } from "react";

const AppContext = createContext();
const DispatchContext = createContext();

export const initialState = {
  value: 0, // initial value inside state this can be any structure you want
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": //Operations to modify state
      return {
        ...state,
        value: state.value + 1,
      };

    case "MINUS":
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export const useDispatchContext = () => useContext(DispatchContext);
