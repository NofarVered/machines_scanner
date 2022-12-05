const scansUrl ='http://localhost:8081/scans/'


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

