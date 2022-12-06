const accountsUrl ='http://localhost:8000/machines/'


export function getMachines(){
    return fetch(machinesUrl) 
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