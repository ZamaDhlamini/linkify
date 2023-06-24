import { createContext } from "react";

export interface ILocation{
  id: string;
  address: string;
  latitude: number;
  longitude: number;
  
}

export const INITIAL_STATE: ILocationStateContext={
    locationGotten:[],
    locationData: [],
  }

  export interface ILocationStateContext{
    readonly locationGotten?:Array<ILocation>;
    readonly locationData?: ILocation[];
  }

  export interface ILocationActionContext{
    getLocation?:() => void;
}

const LocationStateContext = createContext<ILocationStateContext>(INITIAL_STATE);

const LocationActionContext = createContext<ILocationActionContext>(undefined);

export {LocationStateContext, LocationActionContext};