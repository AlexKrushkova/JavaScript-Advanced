function solve() {
    let addBtn = document.getElementById("add");
    let taskInputField = document.querySelector("#task");
    let descriptionInputField = document.querySelector("#description");
    let dueDate = document.querySelector("#date");

    let open = document.querySelectorAll("section")[1].children[1];
    let inProgress = document.querySelectorAll("section")[2].children[1];
    let complete = document.querySelectorAll("section")[3].children[1];
    
    addBtn.addEventListener("click", function(e){
        e.preventDefault();

        if (taskInputField.value !== "" && descriptionInputField.value !== "" && dueDate.value !== Date) { 
            let article = document.createElement("article");
            let h3 = document.createElement("h3");
            h3.textContent = taskInputField.value;
            let pDescription = document.createElement("p");
            pDescription.textContent = `Description: ${descriptionInputField.value}`;
            let pDueDate = document.createElement("p");
            pDueDate.textContent = `Due Date: ${dueDate.value}`;

            let divWthButtones = document.createElement("div");
            divWthButtones.className = "flex";
            let startButton = document.createElement("button");
            startButton.className = "green";
            startButton.textContent = "Start";
            let deleteButton = document.createElement("button");
            deleteButton.className = "red";
            deleteButton.textContent = "Delete";

            divWthButtones.appendChild(startButton);
            divWthButtones.appendChild(deleteButton);

            
            article.appendChild(h3);
            article.appendChild(pDescription);
            article.appendChild(pDueDate);
            article.appendChild(divWthButtones);
            open.appendChild(article);

            taskInputField.value = "";
            descriptionInputField.value = "";
            dueDate.value = "";


            startButton.addEventListener("click", function(e){
                let itemToRemove =  document.querySelector(".flex");
                article.removeChild(itemToRemove);

                let newDiwButtons = document.createElement("div");
                newDiwButtons.className = "flex";
                let deleteBTN = document.createElement("button");
                deleteBTN.className = "red";
                deleteBTN.textContent = "Delete";
                let finishBTN = document.createElement("button");
                finishBTN.className = "orange";
                finishBTN.textContent = "Finish";

                newDiwButtons.appendChild(deleteBTN);
                newDiwButtons.appendChild(finishBTN);

                article.appendChild(newDiwButtons);
                inProgress.appendChild(article);


                finishBTN.addEventListener("click", function(e){
                    let itemToRemove =  document.querySelector(".flex");
                    article.removeChild(itemToRemove);
                    complete.appendChild(article);

                })
                deleteBTN.addEventListener("click", function(e){
                    inProgress.removeChild(article);
                })

            })

            deleteButton.addEventListener("click", function(e){
                open.removeChild(article);
            })

        } 
    })
 }