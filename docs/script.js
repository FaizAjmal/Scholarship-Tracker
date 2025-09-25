const API_URL = "https://scholarship-tracker-backend.onrender.com";

async function loadScholarships() {
    const res = await fetch(`${API_URL}/list`);
    const data = await res.json();
    const list = document.getElementById("scholarship-list");
    list.innerHTML = "";
    data.forEach(sch => {
        const li = document.createElement("li");
        li.textContent = `${sch.name} — Deadline: ${sch.deadline}`;
        list.appendChild(li);
    });
}

document.getElementById("scholarship-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const deadline = document.getElementById("deadline").value;

    if (name && deadline) {
        await fetch("https://scholarship-tracker-backend.onrender.com/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: scholarshipName,
    deadline: scholarshipDeadline,
    link: scholarshipLink   // ✅ must send link too
  })
});

        });
        e.target.reset();
        loadScholarships();
    }
});

loadScholarships();
