let formBtn = document.querySelector("#addBtn");
let form = document.querySelector(".hidden-form");
let closeBtn = document.querySelector("#close");
let card = document.querySelector(".card-container");
let upBtn = document.querySelector("#upBtn");
let downBtn = document.querySelector("#downBtn");

formBtn.addEventListener("click" , function(){
    form.style.display = "initial";
})

closeBtn.addEventListener("click", function(){
    form.style.display = "none";
});

function savetoCard(obj){
    if(localStorage.getItem("tasks") == null){
        let oldTask = [];
        oldTask.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTask));
    }
    else{
        let oldTask = localStorage.getItem("tasks");
        oldTask = JSON.parse(oldTask);
        oldTask.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTask));
    }
}

function createProfileCard() {
    let allTask = JSON.parse(localStorage.getItem("tasks"));

    allTask.forEach(function(task){
  // Main card div
  const card = document.createElement("div");
  card.classList.add("profile-card");

  // Avatar image
  const img = document.createElement("img");
  img.src = task.imgUrlCheck;
  img.classList.add("avatar");

  // Name heading
  const h3 = document.createElement("h3");
  h3.textContent = task.nameCheck;

  // Details: Home town
  const hometownDiv = document.createElement("div");
  hometownDiv.classList.add("details");

  const hometownLabel = document.createElement("p");
  hometownLabel.textContent = "Home town";
  const hometownValue = document.createElement("span");
  hometownValue.textContent = task.homeTownCheck;

  hometownDiv.appendChild(hometownLabel);
  hometownDiv.appendChild(hometownValue);

  // Details: Bookings
  const bookingsDiv = document.createElement("div");
  bookingsDiv.classList.add("details");

  const bookingsLabel = document.createElement("p");
  bookingsLabel.textContent = "Bookings";
  const bookingsValue = document.createElement("span");
  bookingsValue.textContent = task.bookingsCheck;

  bookingsDiv.appendChild(bookingsLabel);
  bookingsDiv.appendChild(bookingsValue);

  // Actions (Call / Message buttons)
  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("actions");

  const callBtn = document.createElement("button");
  callBtn.classList.add("call");
  callBtn.textContent = "Call";

  const msgBtn = document.createElement("button");
  msgBtn.classList.add("message");
  msgBtn.textContent = "Message";

  actionsDiv.appendChild(callBtn);
  actionsDiv.appendChild(msgBtn);

  // Assemble card
  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(hometownDiv);
  card.appendChild(bookingsDiv);
  card.appendChild(actionsDiv);

  // Append to container
  document.querySelector(".card-container").appendChild(card);
  });
}

let nameInput = document.querySelector("#nameInput");
let hometownInput = document.querySelector("#hometownInput");
let bookingsInput = document.querySelector("#bookingsInput");
let imagePathInput = document.querySelector("#imagePathInput");

    form.addEventListener("submit" , function(dets){
        dets.preventDefault();
     let nameCheck = nameInput.value.trim();
     let homeTownCheck = hometownInput.value.trim();
     let bookingsCheck = bookingsInput.value.trim();
     let imgUrlCheck = imagePathInput.value.trim();
     
     if(nameCheck === ""){
         alert("enter name.");
         return
     }
     if(homeTownCheck === ""){
         alert("Enter Home Town.");
         return
     }
     if(bookingsCheck === ""){
        alert("Enter booking details.");
        return
     }
     
     if(imgUrlCheck === ""){
         alert("Enter Image Url.");
         return
     }
      savetoCard({
        nameCheck,
        homeTownCheck,
        bookingsCheck,
        imgUrlCheck,
    });
    form.reset();
    form.style.display = "none";
    createProfileCard();  
    });

   window.addEventListener("DOMContentLoaded", createProfileCard);

   upBtn.addEventListener("click", function(){
    let lastCard = card.lastElementChild;
    if(lastCard){
        card.insertBefore(lastCard , card.firstElementChild);
    }
   });
  downBtn.addEventListener("click", function(){
    let firstCard = card.firstElementChild;
    if(firstCard){
        card.append(firstCard);
    }
   });

