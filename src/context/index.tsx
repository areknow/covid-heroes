import { createContext, useState } from 'react';
import { DEFAULT_STATE } from '../config/';

export interface ContextModel {
  formType: string;
  foo: boolean;
}

type ContextType = {
  context: ContextModel;
  updateContext: Function;
};

export const Context = createContext<ContextType>({
  context: DEFAULT_STATE,
  updateContext: () => null
});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [context, setContext] = useState<ContextModel>(DEFAULT_STATE);

  function updateContext(updateData: Partial<ContextModel>) {
    setContext(context => {
      return { ...context, ...updateData };
    });
  }

  return (
    <Context.Provider value={{ context, updateContext }}>
      {children}
    </Context.Provider>
  );
};
