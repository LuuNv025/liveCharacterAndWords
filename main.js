const textArea = document.getElementById("content");
const charactersCount = document.getElementById('cCount');
const wordsCount = document.getElementById('wCount');
textArea.oninput = () =>{
    let characters = textArea.value;
    charactersCount.innerText = characters.replace(/\s/g, '').length;

    let words = textArea.value.split(' ').filter((item) =>{
        return item != '';
    })
    // logic: sử dụng hàm split để tách chuỗi thành các từ, với nhận biết là dấu ' '
    // --> sau đó lọc mảng vừa tìm được để trả về các phần tử có kí tự <> ''
    wordsCount.textContent = words.length;
    // note: textContent tương tự innerHTML
}


// // Xử lí lưu file
// let button = document.getElementById('handleClick');
// button.addEventListener('click',()=>{
//     alert(test);
//     let fileName = document.getElementById('nameFile').value;
//     let data = JSON.stringify(textArea.value);
//     let file = new Blob([data],{type:"text"});
//     var anchor = document.createElement('a');
//     anchor.href = URL.createObjectURL(file);
//     anchor.download = fileName +'.txt';
//     anchor.click();
// })
