import { createAction } from "redux-actions";
import { INumber, INumberStateContext } from "./context";


export enum NumberActionEnum{
    GetNumberRequest = 'Get',
}

export const GetNumberRequestAction = createAction<INumberStateContext, Array<INumber>>(NumberActionEnum.GetNumberRequest, (numberGotten) => ({numberGotten}));


