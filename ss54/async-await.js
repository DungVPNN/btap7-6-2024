/* 
    Async-await sinh ra ở phiên bản ES7
    sinh ra giải quyết vấn đề sử lý bất đồng bộ
    giúp cho việc viết code gọn gàng hơn

    async đc đặt trc 1 hàm(function) thì sẽ biến function đấy thành 1 promise
    nếu trong promise mà muốn bắt lỗi thì dùng .catch -reject()
    - trong async await làm sao để bắt lỗi được?
    => 
*/

    // bắt lỗi ở try và hiển thị lỗi ở catch, vì thế log 111fff vẫn đc hiển thị mà k bị chặn
try {
    console.log(a);
} catch (error) {
    console.log(error);
}
console.log('11111111111111ffffffffffff');

async function asynAwait() {
    await new Promise(()=>{
        setTimeout(()=>{
            console.log(1);
            resolve();
        },2000)
    })
    console.log(2);
}
console.log(asynAwait());

// function lấy dữ liệu
async function getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(user=>user.json())
    .then(data=>console.log('dữ liệu khi lấy về',data));
}
getData();
try{
    //viết logic thực thi
    async function getData() {
        await fetch('https://jsonplaceholder.typicode.com/users');
    }
} catch(error){
    console.log('lỗi');
}