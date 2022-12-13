import axios from 'axios'

const accountsUrl ='http://localhost:8000/accounts/current'


export function getAccounts(){
    return fetch(accountsUrl) 
    .then(res => res.json())
    .then(
      (result) => {  
                          
        return result
      },           
      (error) => {              
        return error
      }
    )
}

export function getMachinesByAccount(account) {
  return fetch(`http://localhost:8000/machines/${account}`) 
  .then(res => res.json())
  .then(
    (result) => {                    
      return result
    },           
    (error) => {              
      return error
    }
  )
}


export function changeStatusToRemoved(account, machine){
  const newScan = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      
  };
  return fetch(`http://localhost:8000/accounts/${account}/${machine}`,newScan)
      .then(response => response.json())
      .then(
          (result) => {
             return result
          },
          (error) => {
            alert(error)
          }
        )
}

