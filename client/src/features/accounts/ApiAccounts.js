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