const scansUrl ='http://localhost:8000/scans/'


export function getScansRecent(){
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
        return result.payload
      },           
      (error) => {              
        return error
      }
    )
}

export function addScan(Scan){
    const newScan = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Scan)
    };
    return fetch(scansUrl, newScan)
        .then(response => response.json())
        .then(
            (result) => {   
               return result
            },           
            (error) => {              
              alert(error)
            }
          )
}


// export function reRunScan(scanId){
//     const newScan = { 
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(scanId)
//     };
//     return fetch(scansUrl, newScan)
//         .then(response => response.json())
//         .then(
//             (result) => {   
//                return result
//             },           
//             (error) => {              
//               alert(error)
//             }
//           )
// }

