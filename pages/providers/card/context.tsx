import { createContext } from "react";

export interface ICard{
    id: string;
    CardName: string;
    CardNumber: number;
    Month: number;
    Day: number;
}

export interface ICardStateContext{
   readonly CardGotten?:Array<ICard>;
   readonly CardCreated?: ICard;
}

export const INITIAL_STATE: ICardStateContext = {
  CardGotten:[],
}

export interface ICardActionContext{
   getCard?:() => void;
   createCard?:(payload:ICard) => void;
}

const CardContext = createContext<ICardStateContext>(INITIAL_STATE);
export const CardStateContext = createContext<ICardStateContext>({});
export const CardActionContext = createContext<ICardActionContext | undefined>({});

export {CardContext};

