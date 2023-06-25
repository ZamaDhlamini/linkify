import { createContext } from "react";

export interface IGrant{
    id: string,
    grantType: string,
    createdAt: string;
    grantDescription: string;
    approval: string;
    grantName: string;
    surname: string;
    grantAmount: number;
}

export const INITIAL_STATE: IGrantStateContext={
    grantGotten:[],
    grantData: [],
  }

  export interface IGrantStateContext{
    readonly grantGotten?:Array<IGrant>;
    readonly searchedGrant?:IGrant[];
    readonly grantData?: IGrant[];
  }

  export interface IGrantActionContext{
    getGrant?:() => void;
    searchGrant?:(payload:string) => void;
    filterGrant?:(payload:string) => void;
}

const GrantStateContext = createContext<IGrantStateContext>(INITIAL_STATE);

const GrantActionContext = createContext<IGrantActionContext>(undefined);

export {GrantStateContext, GrantActionContext};