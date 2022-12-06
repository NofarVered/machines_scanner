const scansUrl ='http://localhost:8000/scans/'


export function getScans(){
    return fetch(scansUrl) 
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

export function getScansHistory(scanId){
    return fetch(scansUrl+scanId) 
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

