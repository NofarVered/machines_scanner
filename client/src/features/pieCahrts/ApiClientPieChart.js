const getPrivilegStatic ='http://localhost:8000/statistics/privilegedAmount'
const getNonPrivilegStatic ='http://localhost:8000/statistics/nonPrivilegedAmount'
const getOsStatics ='http://localhost:8000/statistics/nonPrivilegedAmount'

export function StatiscticOFpriviligeOfAccounts(){
    try {
        const privileged =0
        const Nonprivileged =0
        getPrivilegStatic.then((resultPre)=>{
            privileged=resultPre
            getNonPrivilegStatic((resultNon)=>{
                Nonprivileged=resultNon
            })
        })
        return {"privileged":privileged["number_of_privileged"],
        "nonpriviliged": Nonprivileged["number_of_nonPrivileged"]}

    } catch (error) {
        
    }
}

 function getPrivilegStatictis(){
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
function getNonPrivilegStatictis(){
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