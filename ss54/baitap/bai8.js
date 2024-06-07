const countDown = (n) => {
    return new Promise((resolve, reject) => {
        let intervalId = setInterval(() => {
            console.log(n);
            n--;
            if (n <0) {
                clearInterval(intervalId);
                resolve(); 
            }
        }, 1000);
    });
}

countDown(5)
    .then(() => {
        console.log("Hoàn thành quá trình");
    });