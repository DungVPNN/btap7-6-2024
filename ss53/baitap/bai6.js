const checkCondition=(x)=>{
    setTimeout(()=>{
        console.log("task 1 được thực thi");
        setTimeout(()=>{
            console.log("task 2 được thực thi");
            setTimeout(()=>{
                console.log("task 3 được thực thi"); //callback hell 🤡
            },2000)
        },1500)
    },1000)
}
checkCondition();