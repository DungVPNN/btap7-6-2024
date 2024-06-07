const addTask=(x,y)=>{
    let c =true;
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i]===x){
            c=false
            break
        }
    }
    if (c) {
        tasks.push(x);
    }
    y(c);
    displayTasks()
}
const callback1=(a)=>{
    if(a){
        console.log('đã thêm công việc thành công');
    } else{
        console.log('công việc đã tồn tại trong danh sách');
    }
}
const deleteTask=(x)=>{
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i]===x){
            tasks.splice(i,1);
        }
    }
    displayTasks()
}
const displayTasks=()=>{
    console.log(tasks);
}
const tasks=['quét nhà'];
addTask('rửa bát', callback1);
deleteTask('quét nhà')