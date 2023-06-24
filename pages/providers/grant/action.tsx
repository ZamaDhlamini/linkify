import { createAction } from "redux-actions";
import { IGrant, IGrantStateContext } from "./context";


export enum GrantActionEnum{
    GetGrantRequest = 'Get',
    SearchGrantRequest = 'SEARCH',
}

export const GetGrantRequestAction = createAction<IGrantStateContext, Array<IGrant>>(GrantActionEnum.GetGrantRequest, (grantGotten) => ({grantGotten}));
export const SearchGrantRequestAction = createAction<IGrantStateContext, IGrant[]>(GrantActionEnum.SearchGrantRequest,(searchedGrant) => ({searchedGrant}));

