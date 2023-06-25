import React, { FC, PropsWithChildren, useContext, useEffect, useReducer, useState } from 'react';
import { NumberReducer } from './reducer';
import {INITIAL_STATE, NumberActionContext, NumberStateContext,} from './context';
import { useGet} from 'restful-react';
import { GetNumberRequestAction} from './action';

const NumberProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NumberReducer, INITIAL_STATE);
    const [numberData, setNumberData] = useState([]); // Add grantData state
  
    const { data, refetch: getNumberHttp } = useGet({
      path: 'SarsNumber/GetAll',
      lazy: true,
    });
  
    useEffect(() => {
      if (data) {
        dispatch(GetNumberRequestAction(data.result));
        setNumberData(data.result); // Update grantData state with fetched data
      }
    }, [data]);
  
    const getNumber = async () => {
      getNumberHttp();
    };
  
  
    return (
      <NumberStateContext.Provider value={{ ...state, numberData }}> {/* Pass grantData in the context value */}
        <NumberActionContext.Provider
          value={{
            getNumber,
          }}
        >
          {children}
        </NumberActionContext.Provider>
      </NumberStateContext.Provider>
    );
  };
  

function useNumberState() {
    const context = useContext(NumberStateContext);
    if (!context) {
        throw new Error('useNumberState must be used within a NumberProvider');
    }
    return context;
}

function useNumberAction() {
    const context = useContext(NumberActionContext);
    if (context === undefined) {
        throw new Error('useNumberState must be used within a NumberProvider');
    }
    return context;
}

function useNumber() {
    return {
        ...useNumberState(),
        ...useNumberAction(),
    };
}
export { NumberProvider, useNumber };
    function createMovieRequestAction(result: any): import("redux-actions").Action<import("./context").INumberStateContext> {
        throw new Error('Function not implemented.');
    }