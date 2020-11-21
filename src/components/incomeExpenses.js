import React,{useContext} from 'react';
import {GlobalState} from '../context/GlobalState';

const IncomeExpenses = () => {
    const context = useContext(GlobalState) 
    let income = 0
    let expense = 0
    context.transactions.map(ele => (
           ele.amount > 0 ? income = income + ele.amount
           :
               expense = expense + ele.amount
           
        ))
    console.log(context);

    return ( 
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
    <p className='money plus'>
    ${income}
    </p>
            </div>
            <div>
            <h4>Expense</h4>
            <p className='money minus'>${Math.abs(expense)}</p>
            </div>
        </div>
     );
}
 
export default IncomeExpenses;