import React, { FC, PropsWithChildren, useContext, useEffect, useReducer, useState } from 'react';
import { LocationReducer } from './reducer';
import {INITIAL_STATE, LocationActionContext, LocationStateContext,} from './context';
import { useGet} from 'restful-react';
import { GetLocationRequestAction} from './action';
import { GrantActionContext, GrantStateContext } from '../grant/context';

const LocationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(LocationReducer, INITIAL_STATE);
    const [locationData, setLocationData] = useState([]); // Add grantData state
  
    const { data, refetch: getMoviesHttp } = useGet({
      path: 'Location/GetAll',
      lazy: true,
    });
  
    useEffect(() => {
      if (data) {
        dispatch(GetLocationRequestAction(data.result));
        setLocationData(data.result); // Update grantData state with fetched data
      }
    }, [data]);
  
    const getLocation = async () => {
      getMoviesHttp();
    };
  
  
    return (
      <LocationStateContext.Provider value={{ ...state, locationData }}> {/* Pass grantData in the context value */}
        <LocationActionContext.Provider
          value={{
            getLocation
          }}
        >
          {children}
        </LocationActionContext.Provider>
      </LocationStateContext.Provider>
    );
  };
  

function useLocationState() {
    const context = useContext(GrantStateContext);
    if (!context) {
        throw new Error('useLocationState must be used within a LocationProvider');
    }
    return context;
}

function useLocationAction() {
    const context = useContext(GrantActionContext);
    if (context === undefined) {
        throw new Error('useLocationState must be used within a LocationProvider');
    }
    return context;
}

function useLocation() {
    return {
        ...useLocationState(),
        ...useLocationAction(),
    };
}
export { LocationProvider, useLocation};
    function createLocationRequestAction(result: any): import("redux-actions").Action<import("./context").ILocationStateContext> {
        throw new Error('Function not implemented.');
    }