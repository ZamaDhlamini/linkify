import React, { FC, PropsWithChildren, useContext, useEffect, useReducer, useState } from 'react';
import { MovieReducer } from './reducer';
import {GrantActionContext, GrantStateContext, IGrant,INITIAL_STATE,} from './context';
import { useGet, useMutate } from 'restful-react';
import { GetGrantRequestAction, SearchGrantRequestAction } from './action';

const GrantProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);
    const [grantData, setGrantData] = useState([]); // Add grantData state
  
    const { data, refetch: getMoviesHttp } = useGet({
      path: 'Grant/GetAll',
      lazy: true,
    });
    const { data: searchResults, refetch: searchMoviesHttp } = useGet({
      path: 'Movie/Search',
      lazy: true,
    });
  
    useEffect(() => {
      if (data) {
        dispatch(GetGrantRequestAction(data.result));
        setGrantData(data.result); // Update grantData state with fetched data
      }
    }, [data]);
  
    const getGrant = async () => {
      getMoviesHttp();
    };
  
    const searchGrant = async () => {
      searchMoviesHttp();
    };
  
    useEffect(() => {
      if (searchResults) {
        dispatch(SearchGrantRequestAction(searchResults.result));
        setGrantData(searchResults.result); // Update grantData state with search results
      }
    }, [searchResults]);
  
    return (
      <GrantStateContext.Provider value={{ ...state, grantData }}> {/* Pass grantData in the context value */}
        <GrantActionContext.Provider
          value={{
            getGrant,
            searchGrant,
          }}
        >
          {children}
        </GrantActionContext.Provider>
      </GrantStateContext.Provider>
    );
  };
  

function useGrantState() {
    const context = useContext(GrantStateContext);
    if (!context) {
        throw new Error('useGrantState must be used within a MovieProvider');
    }
    return context;
}

function useGrantAction() {
    const context = useContext(GrantActionContext);
    if (context === undefined) {
        throw new Error('useGrantState must be used within a MovieProvider');
    }
    return context;
}

function useGrant() {
    return {
        ...useGrantState(),
        ...useGrantAction(),
    };
}
export { GrantProvider, useGrant };
    function createMovieRequestAction(result: any): import("redux-actions").Action<import("./context").IGrantStateContext> {
        throw new Error('Function not implemented.');
    }