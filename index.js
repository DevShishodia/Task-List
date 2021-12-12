
let tasks = [];

let btn = document.getElementById("btnn");

  let delete_task = function (event){
     let id = event.target.id;
     console.log(id);

      let element_id = `li_${id}`;
     console.log(element_id); 

     let elem = document.getElementById(element_id);
      console.log(elem);
      elem.remove();

      let arr = id.split(" ");
      let index = arr[1];
      console.log(index);

      tasks.splice(index , 1);
  }
  let edit_task = function(event){
      let id = event.target.id;
      let index = id.split("_")[1];
      let edit_task = prompt("enter the task");
      tasks[index] = edit_task;
      display_task();

  }

  let display_task = function(){
      let ul = document.getElementById('tasklist');
       ul.innerText = "";
      for(let i =0; i<tasks.length ; i++){
          let single_task = tasks[i];
         let new_element = document.createElement('li');
         new_element.innerText = single_task;

         let btn = document.createElement('button');
         btn.innerText = "Delete";
         btn.addEventListener('click', delete_task);

         let edit_btn = document.createElement('button');
         edit_btn.innerText = "Edit";
         edit_btn.addEventListener('click', edit_task);
     
         edit_btn.id =`edit_${i}`;
         btn.id = `btn_${i}`;
         new_element.id = `li_btn_${i}`;
 
         new_element.appendChild(btn);
         new_element.appendChild(edit_btn);
         ul.appendChild(new_element);
   }
}


 function add_task(){
     let input = document.getElementsByName("task")[0];
     let val = input.value ;
     tasks.push(val);
     display_task();
 }


btn.addEventListener('click',add_task)

