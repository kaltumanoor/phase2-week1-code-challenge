import React, {useEffect, useState} from 'react';
import Bank from './Bank';
import AddTransaction from './AddTransaction';
import './App.css';

const BANK_API = "https://my-json-server.typicode.com/levy-web/json-server/transactions"



function App() {
  const [data, setData] = useState([])
  console.log(data)


  useEffect(()=>{
    const intId = fetch(BANK_API)
    .then((res)=>res.json())
    .then((data)=> setData(data))


    return function(){
      clearInterval(intId)
    }


  },[])

  
    function addTransaction(newData) {
      const updatedTransactions = [...data, newData]
      setData(updatedTransactions);
    }
  

  function deleteTodo(id) {
    const updatedTransactions = data.filter(todo => todo.id !== id)
    setData(updatedTransactions)
  }

  
  return (
    <>
      <AddTransaction addTransaction={addTransaction}/>      
      <Bank item={data} onDeleteTodo={deleteTodo}/>      
    </>

  );
}

export default App;
