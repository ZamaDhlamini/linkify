import { createContext } from "react";

export interface INumber{
    id: string,
    number: number,
}

export const INITIAL_STATE: INumberStateContext={
    numberGotten:[],
    numberData: [],
  }

  export interface INumberStateContext{
    readonly numberGotten?:Array<INumber>;
    readonly numberData?: INumber[];
  }

  export interface INumberActionContext{
    getNumber?:() => void;
}

const NumberStateContext = createContext<INumberStateContext>(INITIAL_STATE);

const NumberActionContext = createContext<INumberActionContext>(undefined);

export {NumberStateContext, NumberActionContext};