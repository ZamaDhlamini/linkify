import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { CardActionContext, CardContext, CardStateContext, INITIAL_STATE} from "./context";
import CardReducer from './reducer';
import { CreateCardRequestAction, GetCardRequestAction} from "./action";
import { useContext } from "react";
import { useGet, useMutate } from 'restful-react';
import { message, notification } from "antd";
import axios from "axios";


const CardProvider: FC<PropsWithChildren<any>> = ({children}) => {
  const [state, dispatch] = useReducer(CardReducer, INITIAL_STATE);

  const createCardMutation = useMutate({
    verb: 'POST',
    path: 'Card/Create',
  });

  const { refetch: getPersonById, error: personByIdError, loading: isLoadingPerson, data: person } = useGet({
    path: 'https://localhost:44311/api/services/app/Person/GetByUserId',
  })

  useEffect(() => {
    if(!isLoadingPerson && person?.id){
      console.log('person::', person)
      localStorage.setItem('userDetails', JSON.stringify(person.result))
    }else if(personByIdError){
      console.log('Error person::', personByIdError)
    }
  }, [getPersonById, personByIdError, isLoadingPerson]);
  // const getUserDetails = (id: number) => {
  //   getPersonById({ queryParams: { userId: id } }).then((data) => {
  //       localStorage.setItem('userDetails', JSON.stringify(data.result))
  //       console.log('userD::', data)
  //   })
  // }

//   const loginMutation = useMutate({
//     verb: 'POST',
//     path: 'https://localhost:44311/api/TokenAuth/Authenticate',
//   });

const getPersonByUserId= async (id:number) => {
  console.log("get user Id",id)

  try {
    const response = await fetch(`https://localhost:44311/api/services/app/Person/GetByUserId?id=${id}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log("testing here", data.result);
      return data;
    } else {
      throw new Error("Error retrieving person");
    }
  } catch (error) {
    console.error("Error retrieving person:", error);
    // Handle error appropriately (e.g., display error message, throw custom error, etc.)
    throw error;
  }
  
};
  
  
  const createCard = async (payload) => {
    try {
      const response = await createCardMutation.mutate(payload);
  
      if (createCardMutation.error) {
        // Handle error case
        console.error('Error occurred during card creation', createCardMutation.error);
      } else {
        // Handle success case
        if (response?.data?.request) {
          dispatch(CreateCardRequestAction(response.data.request));
        }
  
        console.log(response.status);
        window.location.href = '/';
      }
    } catch (error) {
      // Handle error case
      console.error('Error occurred during Card creation', error);
    }
  };

  // const getCard= (id:string) => {
  //   console.log("card:",id)
  //   axios.get(`https://localhost:44311/api/services/app/Card/Get?id`)
  //   .then(res =>
  //     {
  //       try
  //       {
  //         console.log('data res',res.data);
  //         if(res.data.success)
  //         {
  //           dispatch(GetCardRequestAction(id));
  //           notification.success({
  //               message: "Success",
  //               description: "Task deleted successfully!",
  //             })
  //       }
  //       }catch(error)
  //       {
  //         console.log('error message',error);
  //         message.error('error message',error)
  //       }
  //     }).catch(err => console.log('catched  error',err))
  // };
  
  
  
  
  

  
  
  
    return(
        <CardContext.Provider value={state}>
            <CardActionContext.Provider value={{createCard}}>
                {children}
            </CardActionContext.Provider>
        </CardContext.Provider>
    )
}

    function useCardState(){
        const context = useContext(CardStateContext);
        if(!context){
            throw new Error('useCardState must be used within a CardProvider')
        }
        return context;
    }
    function useCardAction(){
        const context = useContext(CardActionContext);
        if(context === undefined){
            throw new Error('useCardState must be used within a CardProvider')
        }
        return context;
    }

    function useCard(){
        return{
            ...useCardState(),
            ...useCardAction(),
        }
    };

export {CardProvider, useCard}; //!!don't forget to add useCard!!


