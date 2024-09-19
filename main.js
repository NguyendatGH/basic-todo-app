inputHTML = document.getElementById("app__input");
buttonHTML = document.getElementById("app__button");
taskListHTML = document.getElementById("task__list");
numberOfTasksHTML = document.getElementById("numberOfTasks");

let numberofTasks = 0;
buttonHTML.addEventListener("click", () => {
  const content = inputHTML.value.trim();

  if (content !== "") {
    numberofTasks++;
    numberOfTasksHTML.textContent = numberofTasks;
    console.log(numberOfTasks);
    console.log(inputHTML.value);
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span>${numberofTasks}</span>
      <p>${inputHTML.value}</p>
      <button onClick="deleteTask(this)">DELETE</button>
      `;
    taskItem.classList.add("task__items");
    taskListHTML.appendChild(taskItem);
    console.log(taskItem);
    inputHTML.value = "";
  }else{
    console.log("empty input!");
  }
});

const deleteTask = (button) => {
  console.log(button);
  const taskItem = button.closest(".task__items");
  console.log(taskItem);
  taskItem.remove();
  numberofTasks--;
  numberOfTasksHTML.textContent = numberofTasks;

};
