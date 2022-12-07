const getPrivilegStatic ='http://localhost:8000/statistics/privilegedAmount'
const getNonPrivilegStatic ='http://localhost:8000/statistics/nonPrivilegedAmount'
const getOsStatics ='http://localhost:8000/statistics/nonPrivilegedAmount'



 export function getPrivilegStatictis(){
    return fetch(getPrivilegStatic) 
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
export function getNonPrivilegStatictis(){
    return fetch(getNonPrivilegStatic) 
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


export function getOsStatictis(){
    return fetch(getOsStatics) 
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