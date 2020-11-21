import React, {useContext} from 'react';
import {GlobalState} from '../context/GlobalState';

const Balance = () => {
    const context = useContext(GlobalState) 
    let balance = 0  
    context.transactions.map(ele => (
           balance = balance + ele.amount
        ))
    return ( 
        <>
        <h4>Your Balance</h4>
        <h1 id="balance">${balance}</h1>
        </>
     );
}
 
export default Balance;