const form = document.getElementById("scholarship-form");
const list = document.getElementById("scholarship-list");

async function loadScholarships() {
    const res = await fetch("http://127.0.0.1:5000/list");
    const data = await res.json();
    list.innerHTML = "";
    data.forEach(sch => {
        const li = document.createElement("li");
        li.textContent = `${sch.name} — Deadline: ${sch.deadline}`;
        list.appendChild(li);
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const deadline = document.getElementById("deadline").value;

    if (name && deadline) {
        await fetch("http://127.0.0.1:5000/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, deadline})
        });
        form.reset();
        loadScholarships();
    }
});

loadScholarships();  // load existing scholarships on page load
