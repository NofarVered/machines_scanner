const getPrivilegStatic ='http://localhost:8000/statictes/'
const getOsStatics ='http://localhost:8000/statictes/'

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