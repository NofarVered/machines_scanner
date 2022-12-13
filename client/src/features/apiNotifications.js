const accountsUrl ='http://localhost:8000/accounts/readd'


export function getReaddedFromApi(){
    return fetch(accountsUrl) 
    .then(res => res.json())
    .then(
      (result) => { 
        console.log(result)                  
        return result
      },           
      (error) => {              
        return error
      }
    )
}