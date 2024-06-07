function delayedCallback(callback, delay) {
    setTimeout(callback, delay);
}
delayedCallback(() => console.log('Callback function đã được gọi sau 1 giây'), 1000);