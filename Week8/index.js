let todoList = [];

while(true) {
    let choice = prompt("Lua chon cua ban? (add, show, edit, remove, exit)");

    switch(choice) {
        case "add":
            let job = prompt("Nhập công việc mới:");
            todoList.push(job);
            alert("Đã thêm!");
            break;
        case "show":
            for (let i = 0; i < todoList.length; i++) {
                console.log(todoList[i] + "\n");
            }
            alert("Hoan thanh!");
            break;
        case "edit":
            let name = prompt("Nhập tên công việc muốn sửa:");
            let index = -1;

            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i] === name) {
                    index = i;
                    break;
                }
            }

            if (index === -1) {
                alert("Công việc không tồn tại!");
            } else {
                let newContent = prompt("Nhập nội dung mới:");
                todoList[index] = newContent;
                alert("Đã sửa!");
            }
            break;
        case "remove":
            let name1 = prompt("Nhập công việc muốn xóa:");
            let index1 = -1;

            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i] === name1) {
                    index1 = i;
                    break;
                }
             }

            if (index1 === -1) {
                alert("Không tìm thấy công việc!");
            } else {
                for (let i = index1; i < todoList.length - 1; i++) {
                    todoList[i] = todoList[i + 1];
                }
                todoList.length--;
                alert("Đã xóa!");
            }
            break;

        case "exit":
            alert("Cảm ơn đã sử dụng chương trình. Tạm biệt!");
            break;
        default: alert("Lệnh không hợp lệ!");

    }
    if(choice === "exit") break;
}