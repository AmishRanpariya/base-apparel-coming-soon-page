let btn = document.querySelector(".btn");
let email = document.querySelector("input[type=text]");
let errP = document.querySelector("#error");
let errIcon = document.querySelector("#error-icon");

btn.addEventListener("click", (e) => {
	e.preventDefault();
	if (
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			email.value
		)
	) {
		email.classList.remove("error");
		errIcon.classList.remove("error");
		errP.classList.remove("error");
		return true;
	} else {
		email.classList.add("error");
		errIcon.classList.add("error");
		errP.classList.add("error");
		setTimeout(() => {
			email.classList.remove("error");
			errIcon.classList.remove("error");
			errP.classList.remove("error");
		}, 3000);
		return false;
	}
});
