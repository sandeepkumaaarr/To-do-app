const add = document.querySelector(".add-button");
const done = document.querySelector(".done");
const ulin = document.querySelector(".ulin");
const inputdiv = document.querySelector(".input-div");
const ttltodo = document.querySelector(".ttl-todo");

var ttlnoli=0;
// console.log(noli);
inputdiv.addEventListener("submit",function(event){
    event.preventDefault();
    const addtext = document.getElementById("add-text").value;
    if(addtext)
    {      var  value = 1;
            const newli = document.createElement("li");
            newli.classList.add("liin");        
            const para = document.querySelectorAll(".para");
            for(let p of para)
            {          
                if(p.textContent === addtext){
                    alert("Task already added!!!");
                    value = 0;
                    break;
                }
                else
                value = 1;        
            }
            if(true&&value === 1){
                newli.innerHTML += `<p class="para">${addtext}</p>
            <div class="two-btn-div">
            <button class="add-btn done">Done</button>
            <button class="add-btn delete">Delete</button>
            </div>`;
            ulin.append(newli);  
        }
        ulin.addEventListener("click",function(event){
        if(event.target.classList[1]==="delete"){
            // console.log("ek baar me kitni baar");
            event.target.parentNode.parentNode.remove();
            // console.log(ttlnoli);
            const noli = document.getElementsByTagName("li");
            // console.log(noli);
            ttltodo.textContent = `${noli.length} TASK`;

         }
        if(event.target.classList[1]==="done"){
            event.target.parentNode.parentNode.childNodes[0].style.textDecoration = "line-through";
         }

        });
        // console.log(ttltodo);
        const noli = document.getElementsByTagName("li");

         ttlnoli = noli.length
        ttltodo.textContent = `${ttlnoli} TASK`;


    }
    else
    alert("Enter value");
});


 