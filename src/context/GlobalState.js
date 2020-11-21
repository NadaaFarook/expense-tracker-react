import React,{createContext , useReducer} from 'react';
import AppReducer from './AppReducer'
// Initial state
const initialState = {
    transactions :[
        {id : 1 , text : 'Flower' , amount : -20},
        {id : 2 , text : 'Salary' , amount : 1000},
        {id : 3 , text : 'Grocery' , amount : -300},
        {id : 4 , text : 'Camera' , amount : -150}
    ]
}

// Create context
 export const GlobalState = createContext(initialState)
const GlobalStateProvider = ({children}) => {

    const [state , dispatch] = useReducer(AppReducer , initialState)
    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload : id ,
        });
    }
    function addTransation(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload : transaction ,
        })
    }
    return ( 
        <GlobalState.Provider value={{transactions : state.transactions , deleteTransaction , addTransation}}>
            {children}
        </GlobalState.Provider>
     );
}
 
export default GlobalStateProvider;