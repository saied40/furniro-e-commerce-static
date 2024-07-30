function togglePass(cont, inputID) {
  cont.classList.toggle("tw-show");
  const input = document.getElementById(inputID);
  input.type = input.type === "password" ? "text" : "password";
};
