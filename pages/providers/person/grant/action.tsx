import { createAction } from "redux-actions";
import { IGrant, IGrantStateContext } from "./context";

export enum MovieActionEnum{
    GetGrantRequest = 'Get',
    SearchGrantRequest = 'SEARCH',
}

export const GetGrantRequestAction = createAction<IGrantStateContext, Array<IGrant>>(MovieActionEnum.GetGrantRequest, (grantGotten) => ({grantGotten}));
export const SearchGrantRequestAction = createAction<IGrantStateContext, IGrant[]>(MovieActionEnum.SearchGrantRequest,(searchedGrant) => ({searchedGrant}));
