const getTodo = document.getElementById('setTodo');
const addTodo = document.getElementById('btn');


// buton click eventi
addTodo.addEventListener('click', function () {

    const todo = getTodo.value;
    const todoList = document.getElementById('todoList');//
    const li = document.createElement('li'); 
    const liText = document.createTextNode(todo); // todo textini liye ekliyoruz.

    // Silme butonu
    const btn = document.createElement('button');
    const btnText = document.createTextNode('Sil');

    //butonun görünümünü ayarlama
    btn.style.padding = '10px 15px';
    btn.style.backgroundColor = '#f44336';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '5px';
    btn.style.cursor = 'pointer';
    btn.style.float = 'right';
    btn.style.fontSize = '20px';
    btn.style.fontWeight = 'bold';
    btn.style.marginTop = '-5px';

    // listenin içerisindeki yazının görünümünü ayarlama
    li.style.paddingTop = '25px';
    li.style.fontSize = '25px';


    btn.appendChild(btnText);
    li.appendChild(btn);

    
    li.appendChild(liText);  
    todoList.appendChild(li);
    

    getTodo.value = '';
    getTodo.focus();

});

// silme eventi 
todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});
