import { ICardStateContext } from "./context";
import { CardActionEnums } from "./action";


function CardReducer(incomingState: ICardStateContext, action: ReduxActions.Action<ICardStateContext>): ICardStateContext{
    const {type, payload} = action;
    switch (type) {
        case CardActionEnums.GetCardRequest:
          return { ...incomingState, ...payload }
            
          case CardActionEnums.CreateCardRequest:
          return { ...incomingState, ...payload }
      }
    
}

export default CardReducer;