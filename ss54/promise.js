/* 
    Promise: sinh ra giải quyết các tác vụ bất đồng bộ
    giúp việc giải quyết bất đồng bộ mà bị callback-hell (dùng callback)
    code nhìn gọn gàng hơn, dễ chỉnh sửa, bảo trì hơn
    Promise sinh ra phiên bản ES6-2015
    1. Cú pháp
    let pomise = new Promise();
    - khởi tạo đối tượng từ object contructor
    - đối sô của new Promise nhận vào 1 cái hàm
    - trong hàm này nhận vào 2 tham số
        1. resolve(giải quyết thành công)
        2. reject(từ chối): thất bại
*/

// khởi tạo 1 promise
// let promise = new Promise((resolve, reject)=>{
//     // viết logic sử lý code
//     // nếu logic thành công thì gọi resolve => nhảy vào .then
//     // nếu logic thất bại thì gọi reject => nhảy vào .catch
//     // resolve([1,2,3]);
//     reject('lỗi');
// });
// khi khởi tạo promise thì nó đang ở trạng thái pending(chờ xử lý)
// console.log(promise);
// promise
// .then((a)=>{
//     console.log('khi thành công',a);
// })
// .catch(()=>{
//     console.log('khi thất bại');
// })

// setTimeout(() => {
//     console.log(11111111);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//         }, 1000);
//     }, 1000);
// }, 1000);

let newPromise = new Promise((a, b)=>{
    setTimeout(() => {
        console.log('1 giây');
        a(11111);
    }, 1000);
});
newPromise
.then(()=>{
    return new Promise((a,b)=>{
        setTimeout(()=>{
            console.log('2 giây');
            a()
        },1000)
    })
})
.then(()=>{
    return new Promise((a,b)=>{
        setTimeout(()=>{
            console.log('3 giây');
            a()
        },1000)
    })
})
// có thể có nhiều then, và kết quả trả về của then đầu sẽ là tham số đầu vào của then sau
