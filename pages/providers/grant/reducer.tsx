import { GrantActionEnum } from "./action";
import { IGrantStateContext } from "./context";
export function GrantReducer(
  incomingState: IGrantStateContext,action: ReduxActions.Action<IGrantStateContext>): 
  IGrantStateContext {
  const { type, payload } = action;

  switch (type) {
    case GrantActionEnum.GetGrantRequest:
      return { ...incomingState, ...payload };

  }
}