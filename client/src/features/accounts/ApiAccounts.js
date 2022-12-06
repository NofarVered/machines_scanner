const accountsUrl ='http://localhost:8000/accounts/'


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