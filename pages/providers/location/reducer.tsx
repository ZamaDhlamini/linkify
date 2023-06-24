import { LocationActionEnum } from "./action";
import { ILocationStateContext } from "./context";

export function LocationReducer(incomngState: ILocationStateContext, action: ReduxActions.Action<ILocationStateContext>): ILocationStateContext{
   const {type, payload} = action;

   switch (type){
    case LocationActionEnum.GetLocationRequest:
        return{...incomngState, ...payload};
   }
}
