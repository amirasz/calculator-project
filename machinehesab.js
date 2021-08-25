let display = document.querySelector(".inner-text");
const buttons = document.querySelectorAll(".inner-btn");
for (const button of buttons) {
	button.addEventListener("click", function (event){
		if (this.id == "") {
			let operation = this.innerText;
			if (
				("+/*-%".indexOf(display.value.charAt(display.value.length - 1)) !== -1)
				&& ("+/*-%".indexOf(operation) !== -1)) {
					display.value = display.value.substr(0, display.value.length - 1) + operation;
			}
			else {
				display.value += operation;
			}
		}
		else {
			if (this.id == "backspace") {
				display.value = display.value.substr(0, display.value.length - 1);
			}
			else if (this.id == "clear") {
				display.value = "";
			}
			else {
				calculate()
			}
		}
	});
}
display.addEventListener("input", check);
function check() {
	display.value = display.value.replace(/[^0-9+/*\-x.%]+/, '')
	if (
	("+/*-%".indexOf(display.value.charAt(display.value.legth - 1)) !== -1)
	&& ("+/*-%".indexOf(display.value.charAt(display.value.length - 2)) !== -1) && (display.value.length > 1)) {
		display.value = display.value.substr(0, display.value.length - 2) + display.value.charAt(display.value.length - 1);
	}
}
display.addEventListener("keyup", function (event){
	if (event.keycode === 13) {
		event.preventDefault();
		calculate()
	}
});
function calculate() {
	display.value = eval(display.value.replaceAll('x', '*'))
	if (display.value == "undefined") {
		display.value = "";
	}
}