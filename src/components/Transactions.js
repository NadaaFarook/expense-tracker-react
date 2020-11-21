import React , {useContext} from 'react';
import {GlobalState} from '../context/GlobalState';

const Transactions = ({ele}) => {
    const{deleteTransaction} = useContext(GlobalState)
    const sign = ele.amount > 0 ? '+' : '-' ;
    
    
    return ( 
        <li className={ele.amount > 0 ? 'plus' : 'minus'} id={ele.id}>
            {ele.text} <span>{sign}${Math.abs(ele.amount)}</span><button className="delete-btn" onClick={()=>{deleteTransaction(ele.id)}} >X</button>
        </li>
     );
}
 
export default Transactions;