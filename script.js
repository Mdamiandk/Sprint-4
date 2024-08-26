const addButton = document.getElementById("addButton");
const inputArea = document.getElementById("task");
const taskList = document.getElementById("taskList");

function validateText(text) {
	const trimmedText = text.trim();
	if (!trimmedText) {
		alert("Nazwa zadania nie moze byc pusta");
		return null;
	}
	return trimmedText;
}

function editButtonHandler(button) {
	const buttonText = button.target.innerText;
	const li = button.target.parentNode;
	if (buttonText === "Edytuj") {
		const text = li.firstChild.textContent;
		li.firstChild.textContent = "";
		const editInputText = document.createElement("input");
		editInputText.value = "";
		li.prepend(editInputText);
		button.target.innerText = "Zapisz zmiany";
	} else {
		// Zapisz zmiany
		const text = validateText(li.firstChild.value);
		if (!text) {
			return;
		}

		const textTrimmed = text;
		li.removeChild(li.firstChild);
		li.prepend(textTrimmed);
		button.target.innerText = "Edytuj";
	}
}

function removeButtonHandler(button) {
	const li = button.target.parentNode;
	taskList.removeChild(li);
}

function addTask() {
	const taskText = validateText(inputText.value);
	if (!taskText) {
		return;
	}

	const newTask = document.createElement("li");
	newTask.textContent = taskText;

	const editButton = createButton("Edytuj");
	editButton.addEventListener("click", editButtonHandler);

	const removeButton = createButton("Usun");
	removeButton.addEventListener("click", removeButtonHandler);

	newTask.appendChild(editButton);
	newTask.appendChild(removeButton);
	taskList.appendChild(newTask);

  inputText.value = '';
}

function createButton(text) {
	const editButton = document.createElement("button");
	editButton.textContent = text;

	return editButton;
}

addButton.addEventListener("click", addTask);
