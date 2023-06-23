import { createAction } from "redux-actions";
import { ICard, ICardStateContext } from "./context";

export enum CardActionEnums{
    GetCardRequest = 'GET_CARD',
    CreateCardRequest = 'CREATE',
}

export const CreateCardRequestAction = createAction<ICardStateContext, ICard>(CardActionEnums.CreateCardRequest, (CardCreated) => ({CardCreated}));
export const GetCardRequestAction = createAction<ICardStateContext, Array<ICard>>(CardActionEnums.GetCardRequest, (CardGotten) => ({CardGotten}));