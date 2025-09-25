let scholarships = JSON.parse(localStorage.getItem('scholarships') || '[]');

function displayScholarships() {
    const list = document.getElementById("scholarship-list");
    list.innerHTML = "";

    if (scholarships.length === 0) {
        list.innerHTML = "<li>No scholarships added yet. Add your first scholarship above!</li>";
        return;
    }

    scholarships.forEach((sch, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${sch.name}</strong><br>
            <strong>Deadline:</strong> ${sch.deadline}<br>
            <strong>Link:</strong> <a href="${sch.link}" target="_blank" rel="noopener">Visit Scholarship</a><br>
            <strong>Added:</strong> ${sch.dateAdded}<br>
            <button onclick="deleteScholarship(${index})" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px; margin-top: 5px;">Delete</button>
        `;
        list.appendChild(li);
    });
}

// Handle form submission
document.getElementById("scholarship-form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Debug message

    const name = document.getElementById("name").value.trim();
    const deadline = document.getElementById("deadline").value;
    const link = document.getElementById("link").value.trim();

    // Validation
    if (!name || !deadline || !link) {
        alert("Please fill all fields including the link.");
        return;
    }

    // Validate URL format
    try {
        new URL(link);
    } catch (e) {
        alert("Please enter a valid URL (starting with http:// or https://)");
        return;
    }

    // Add scholarship
    const newScholarship = {
        name: name,
        deadline: deadline,
        link: link,
        dateAdded: new Date().toLocaleDateString()
    };

    scholarships.push(newScholarship);
    localStorage.s
