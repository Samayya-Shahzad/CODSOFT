

function showDate(){

    let now = new Date();
    now=now.toString().split(" ") ; 
 
    document.querySelector("#date").innerHTML="[ "+now[0]+ " " +now[1]+ " "+ now[2]+ ", "+ now[3]+" ]";
    document.querySelector("#date").style.color='beige';
 }
 
 
   
/*  USing Local storage */

const taskArray=localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
console.log(taskArray);


 /*         Enter tasks when clicked                */

 let button=document.querySelector("#write");

 button.addEventListener("click", function run()
 {
           writeTask(document.querySelector('#item'));
 })



 /*         Writes task in local storage                */

 function writeTask(task){

    taskArray.push(task.value);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    location.reload();
 }


 /*              Displays task along with the time when they were written        */

 function displayTasks(){

    // const now = new Date();
    // const TimeString = now.toLocaleTimeString();
    

    let tasks = " ";

    for(let i=0 ; i <taskArray.length; i++ ){


          tasks+= `<div class="task">
          
          <div class="taskInput">
              <textarea disabled>    ${taskArray[i]} </textarea>
              <div class="edit">
                  <button class="editButton"><i class="fa-solid fa-pen "></i></button>
                  <button> <i class="fa-solid fa-trash trashButton"></i></button>
              </div>

          </div>
  
               <div class="save">
                      <button class="saveButton">Save</button>
               </div>
        </div>`;
         
    }

   
   
    document.querySelector(".list").innerHTML= tasks;

    editFunctionality();
    trashFunctionality();
    saveFunctionality();
 }
     

 /*                     Creating functions              */

              /*          edit       */

 function editFunctionality(){

    let saveItem=document.querySelectorAll('.save');
    let taskArea=document.querySelectorAll('.taskInput textarea');

    document.querySelectorAll('.editButton').forEach(function ed(e,i){
        e.addEventListener("click", function editing(){
           
            saveItem[i].style.display="block";
            taskArea[i].disabled = false;
        })    
 })
 }

                 /*          move to trash       */

 function trashFunctionality(){

    document.querySelectorAll('.trashButton').forEach( function del(d, i){
        d.addEventListener("click", function moveToTrash()
        {
            if(i==0){
                taskArray.shift();
                localStorage.setItem("tasks", JSON.stringify(taskArray));
                location.reload();
            }

            else{
            taskArray.splice(i,1);
            localStorage.setItem("tasks", JSON.stringify(taskArray));
            location.reload();
            }
  
        })
    })
 }
                         
                  /*          Save       */

 function saveFunctionality(){

    
    let taskArea=document.querySelectorAll('.taskInput textarea');

    document.querySelectorAll('.saveButton').forEach(function s(s,i){
       
        s.addEventListener("click", function sb(){
             
            taskArray[i] = taskArea[i].value;
            localStorage.setItem("tasks",JSON.stringify(taskArray));
            location.reload();
        })
    })
 }


 /*           shows date  and tasks                        */
 
 window.onload=showDate(); 
 displayTasks();   


  