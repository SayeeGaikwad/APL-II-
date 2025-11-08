function fetchData(callback){
    console.log("Fetching data...");
    setTimeout(()=>{
        const data="User info loaded";
        callback(data);
    },2000);
}

fetchData((info)=>{
    console.log("Received:", info);
})