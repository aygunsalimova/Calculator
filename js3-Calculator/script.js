let textArea = document.getElementById("textarea");

function Cal(num) {

    textArea.value += num;

}

function Calculate() {
    textArea.value = eval(textArea.value);
}

function remove() {
    textArea.value = '';
}