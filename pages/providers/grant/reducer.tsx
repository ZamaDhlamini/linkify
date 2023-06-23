import { MovieActionEnum } from "./action";
import { IGrantStateContext } from "./context";
export function MovieReducer(
  incomingState: IGrantStateContext,
  action: ReduxActions.Action<IGrantStateContext>
): IGrantStateContext {
  const { type, payload } = action;

  switch (type) {
    case MovieActionEnum.GetGrantRequest:
      return { ...incomingState, ...payload };

  }
}