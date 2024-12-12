const form = document.getElementById("form");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  console.log("Введені дані:", formData);

  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  form.reset();
});
