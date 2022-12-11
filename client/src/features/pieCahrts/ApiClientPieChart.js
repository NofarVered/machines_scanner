const getPrivilegStatic ='http://localhost:8000/statistics/privilegedAmount'
const getNonPrivilegStatic ='http://localhost:8000/statistics/nonPrivilegedAmount'
const getMacStatics ='http://localhost:8000/statistics/macAmount'
const getLinuxStatics ='http://localhost:8000/statistics/linuxAmount'
const getWindowsStatics ='http://localhost:8000/statistics/windowsAmount'



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


export function getMacStatictis(){
    return fetch(getMacStatics) 
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
export function getLinuxStatictis(){
    return fetch(getLinuxStatics) 
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

export function getWindowsStatictis(){
    return fetch(getWindowsStatics) 
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


export function getAmountMachines(){
    return fetch(getLinuxStatics) 
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


export function getAmountOfAccount(){
    return fetch(getLinuxStatics) 
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


export function getStaticsOfSucccesScans(){
    return fetch(getLinuxStatics) 
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

export function getStaticsOfFailedScans(){
    return fetch(getLinuxStatics) 
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