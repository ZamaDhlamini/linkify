import { createAction } from "redux-actions";
import { ILocation, ILocationStateContext } from "./context";

export enum LocationActionEnum{
    GetLocationRequest = 'GET',
}

export const GetLocationRequestAction = createAction<ILocationStateContext, Array<ILocation>>(LocationActionEnum.GetLocationRequest, (locationGotten) => ({locationGotten}));