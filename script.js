// var button = document.getElementById("enter")
// var input = document.getElementById("userinput")
// var ul = document.querySelector("ul");

// button.addEventListener("click", function() {
//     if (input.value.length > 0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";

//     }
// })

// input.addEventListener("keypress", function() {
//     if (input.value.length > 0 && event.keyCode === 13) {
//            var li = document.createElement("li");
//            li.appendChild(document.createTextNode(input.value));
//            ul.appendChild(li);
//            input.value = "";
//        }
//    })

// button.addEventListener("click", function() {
//     if (input.value.length > 0) {
        
//     }
// })













// refactored below

// var button = document.getElementById("enter")
// var input = document.getElementById("userinput")
// var ul = document.querySelector("ul");
// var li = document.getElementsByTagName("li");

// function inputLength() {
//     return input.value.length;
// }

// function createListelement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";


//     var button =document.createElement("button");
//     button.appendChild(document.createTextNode("Done!"));
//     li.appendChild(button);
//     button.onclick=underlineParent;

//     var button = document.createElement("button");
//     button.appendChild(document.createTextNode("Delete"));
//     li.appendChild(button);
//     button.onclick=removeParent;

// }


// function underlineParent(event){
// 	event.target.parentNode.classList.toggle("done");
// }


// function removeParent(evt){
// 	evt.target.parentNode.remove();
// } 







    



// function addListAfterClick() {
//         if (inputLength() > 0) {
//             createListelement();
//         }
// }

// function addListAfterKeypress(event) {
//         if (inputLength() > 0 && event.keyCode === 13) {
//                createListelement();
//            }
//        }


// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);




























































































// function grow(x){
//     return x.reduce((a, b)=> a * b,1);
//   }

// console.log(grow([1,2,3]))













// var database = [
//     {
//         username: 'andrei'
//         password: 'supersecret'
//     },
//     {
//         username: "sally"
//         password: "123"
//     },
//     {
//         username: 'ingrid'
//         password: '777'
//     }
// ];

// var newsfeed = [
//     {
//         username: 'Bobby'
//         timeline: 'So tired from all that learning!'
//     },
//     {
//         username: 'Sally'
//         timeline: 'Javascript is soooo cool'
//     },
//     {
//         username: 'Mitch'
//         timeline: 'Javascript is preeeety cool'
//     }
// ];

// function signIn(username, passworkd) {
//     if (username === database[0].username 
//         && password === database[0].password) {
//         console.log(newsfeed);
//     } else {
//         alert("Sorrym wrong username and password");
//     }
// }

// var userNamePrompt = prompt("What\'s your username?");
// var passwordPrompt = prompt("What\'s your password?");

// signIn(userNamePrompt, passwordPrompt);


























































// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];

// var todosImportant = [
//     "clean room!",
//     "brush teeth!",
//     "exercise!",
//     "study javascript!",
//     "eat healthy!"
// ];

// var todosLength = todos.length

// for (var i=0; i < todosLength; i++) {
//     console.log(todos[i], i);
// }

// function logTodos(todo, i) {
//     console.log(todo, i);
// }

// todos.forEach(logTodos);
// todosImportant.forEach(logTodos);


// var counterOne = 10;
// while (counterOne > 10) {
//     console.log("while", counterOne);
//     counterOne--;
// }

// var counterTwo = 10
// do {
//     console.log("do while", counterTwo);
//     counterTwo--;
// } while (counterTwo > 10);

