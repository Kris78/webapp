import React, { createContext, FC, useState } from "react";

type ApiContextType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

let ApiContext: React.Context<ApiContextType>;
const { Provider, Consumer } = (ApiContext = createContext<ApiContextType>(
  {} as ApiContextType
));

const ApiProvider: FC = ({ children }) => {
  const [title, setTitle] = useState("Hello World!");

  return (
    <Provider
      value={{
        title,
        setTitle
      }}
    >
      {children}
    </Provider>
  );
};

export { ApiProvider, Consumer as ApiConsumer, ApiContext };
