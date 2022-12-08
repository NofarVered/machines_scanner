import axios from 'axios'

const accountsUrl ='http://localhost:8000/accounts/removed'


export function getRemovedAccounts(){
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

export function getMachinesByRemovedAccount(account) {
  return fetch(`http://localhost:8000/machines/removed/${account}`) 
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

export function changeStatusToRemoved(account) {
  axios.put(``)
}