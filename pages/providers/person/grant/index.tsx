import React, { FC, PropsWithChildren, useContext, useEffect, useReducer, useState } from 'react';
import { MovieReducer } from './reducer';
import {GrantActionContext, GrantStateContext, IGrant,INITIAL_STATE,} from './context';
import { useGet, useMutate } from 'restful-react';
import { GetGrantRequestAction, SearchGrantRequestAction } from './action';

const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);
    
    const { data ,refetch:getMoviesHttp} = useGet({
        path: 'Grant/GetAll' ,
        lazy: true,
    });
    const { data: searchResults, refetch: searchMoviesHttp } = useGet({
        path: 'Movie/Search',
        lazy: true,
      });

    
    useEffect(()=>{
        if(data){
            dispatch(GetGrantRequestAction(data.result));
        }
    },[data])
    
    const getGrant = async () => {
            getMoviesHttp();
    }

    const searchGrant = async () => {
        searchMoviesHttp();
      }

      useEffect(() => {
        if (searchResults) {
          dispatch(SearchGrantRequestAction(searchResults.result));
        }
      }, [searchResults]);
      


    return (
        <GrantStateContext.Provider value={state}>
            <GrantActionContext.Provider
                value={{
                    getGrant,
                    searchGrant
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
        throw new Error('useMovieState must be used within a MovieProvider');
    }
    return context;
}

function useGrantAction() {
    const context = useContext(GrantActionContext);
    if (context === undefined) {
        throw new Error('useMovieState must be used within a MovieProvider');
    }
    return context;
}

function useMovie() {
    return {
        ...useGrantState(),
        ...useGrantAction(),
    };
}
export { MovieProvider, useMovie };
    function createMovieRequestAction(result: any): import("redux-actions").Action<import("./context").IGrantStateContext> {
        throw new Error('Function not implemented.');
    }