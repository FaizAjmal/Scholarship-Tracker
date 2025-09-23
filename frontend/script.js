const form = document.getElementById("scholarship-form");
const list = document.getElementById("scholarship-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const deadline = document.getElementById("deadline").value;

    if (name && deadline) {
        const li = document.createElement("li");
        li.textContent = `${name} — Deadline: ${deadline}`;
        list.appendChild(li);

        // reset form
        form.reset();
    }
});
