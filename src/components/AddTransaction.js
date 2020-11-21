import React , {useState , useContext} from 'react';
import {GlobalState} from '../context/GlobalState';

const AddTransaction = () => {
    const [text , setText] = useState('')
    const [amount , setAmount] = useState(0)
    const {addTransation} = useContext(GlobalState) 
    const onSubmit =(e)=>{
        e.preventDefault();

        const newTransation = {
            id: Math.random()*10,
            text :  text ,
            amount : +amount ,
        }
        addTransation(newTransation)
    }
    return ( 
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}> 
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=>{setText(e.target.value )}} placeholder="Enter text......" />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />
                </label>
                <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value )}} placeholder="Enter amount......" />
            </div>
            <button className="btn">Add transaction</button>
        </form>
        </>
     );
}
 
export default AddTransaction;