function getdata(dataid){
    return new Promise((resolve,reject), ()=>{
        setTimeout(() => {
            console.log("data ",dataid);
            resolve("Promise");
        }, 2000);
    })
}
async function getAlldata(){
 
    await getdata(2);
    await getdata(5);
}
console.log(getAlldata())