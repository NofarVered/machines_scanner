const machinesUrl ='http://localhost:8000/machines/'


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

export function getAccountsByMachine(machine) {
  return fetch(`http://localhost:8000/accounts/machine/${machine}`)
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