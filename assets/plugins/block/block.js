
const button = document.querySelector('button');

const disableButton = () => {
    //console.log("va");
    button.disabled = true;

};
button.addEventListener('click', disableButton);
