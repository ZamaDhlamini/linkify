import { NumberActionEnum } from "./action";
import { INumberStateContext } from "./context";

export function NumberReducer(
  incomingState: INumberStateContext,action: ReduxActions.Action<INumberStateContext>): 
  INumberStateContext {
  const { type, payload } = action;

  switch (type) {
    case NumberActionEnum.GetNumberRequest:
      return { ...incomingState, ...payload };

  }
}