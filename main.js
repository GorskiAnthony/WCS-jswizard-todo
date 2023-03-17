const text = document.getElementById("myInput");
const addBtn = document.querySelector(".addBtn");
const myUL = document.querySelector("#myUL");
const myList = document.querySelectorAll("li");
const closes = document.getElementsByClassName("close");

// for (let i = 0; i < myList.length; i++) {
// 	const span = document.createElement("span");
// 	span.innerHTML = "x";
// 	// span.classList.add("mystyle");
// 	span.className = "close";
// 	myList[i].append(span);
// }

myUL.addEventListener("click", function (event) {
	// doc : https://developer.mozilla.org/fr/docs/Web/API/Element/tagName
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("checked");
	}
});

// for (let i = 0; i < closes.length; i++) {
// 	closes[i].onclick = function () {
// 		const li = this.parentElement;
// 		li.style.display = "none";
// 	};
// }

addBtn.addEventListener("click", function () {
	// je créer le tag li
	const li = document.createElement("li");
	// je donne le texte saisie aussi
	li.innerHTML = text.value;
	myUL.insertBefore(li, myUL.firstChild);
	const span = document.createElement("span");

	// span.classList.add("mystyle");
	span.innerHTML = "x";
	span.className = "close";
	li.append(span);
	text.value = "";

	for (let i = 0; i < closes.length; i++) {
		closes[i].onclick = function () {
			const li = this.parentElement;
			li.style.display = "none";
		};
	}
});
