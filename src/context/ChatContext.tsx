import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };
  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.uid
              ? currentUser.uid + action.uid
              : action.uid + currentUser.uid,
        };
      default:
        return state;
    }
  };

  const [state, disptach] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, disptach }}>
      {children}
    </ChatContext.Provider>
  );
};
