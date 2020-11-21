import React , {useContext} from 'react';
import {GlobalState} from '../context/GlobalState';
import Transactions from './Transactions'


const TransactionList = () => {

    const context = useContext(GlobalState)
    console.log(context);
    return ( 
        <>
            <h3>History</h3>
            <ul className="list">

                {context.transactions.map(ele => (
                    <Transactions ele={ele} />
                ))}
                
            </ul>
        </>
     );
}
 
export default TransactionList;