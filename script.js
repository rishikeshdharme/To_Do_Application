const add_to_do =()=>{

    let tittle = document.getElementById("tittlef").value
    let desc = document.getElementById("discf").value



    let todo=[];
    let localTodos = localStorage.getItem("todo");

    if(localTodos!=null){
        todo = JSON.parse(localTodos);
    }

   let todosob={
    tittle:tittle,
    desc :desc,
    id: Math.trunc(Math.random()*1000)
   }

   todo.push(todosob);

   localStorage.setItem("todo",JSON.stringify(todo))

   show_to_do()
}


// showing data in display

let show_to_do =()=>{

    let todostring = localStorage.getItem("todo");

        let content=''
    if(todostring==null){
        content+=`<h3 class= "text-center mt-4" >No ToDo to show</h3>`
    }
    else{
        let tdob = JSON.parse(todostring);

        for(let todo of tdob.reverse()){
        content+=`
        <div class="card">
        <div class="card-body">
           <h3>${todo.tittle}</h3>
           <p>${todo.desc}</p>

            
        </div>
        </div>
        
        
        `
        }
    }

    document.getElementById("maincontent").innerHTML = content;

    

}
show_to_do();