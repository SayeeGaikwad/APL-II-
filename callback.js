function fetchData(callback){
    console.log("Fetching data...");
    setTimeout(function(){
        const data="Sample data received";
        callback(data);
    },2000);
}

function processData(data){
    console.log("Processing data:", data);
}

fetchData(processData);