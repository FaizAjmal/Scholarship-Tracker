const API_URL = "https://scholarship-tracker-backend.onrender.com";

// Load scholarships and display in the list
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

// Handle form submission
document.getElementById("scholarship-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const deadline = document.getElementById("deadline").value;
    const link = document.getElementById("link").value; // Make sure your form has an input with id="link"

    if (name && deadline && link) {
        await fetch(`${API_URL}/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                deadline: deadline,
                link: link
            })
        });

        e.target.reset();
        loadScholarships();
    } else {
        alert("Please fill all fields including the link.");
    }
});

// Initial load
loadScholarships();
