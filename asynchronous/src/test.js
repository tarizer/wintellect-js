let counter = 0;
const handleClick = () => {
  console.log("I have been clicked", ++counter);
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("I have been clicked", ++counter);
});
