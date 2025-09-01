const journalEntries = [
    {
        title: "Entry 1",
        date: "01-09-2025",
        details: "Having a great time with the dev allies",
    },

    {
        title: "Entry 2",
        date: "01-09-2025",
        details: "..........",
    },


    {
        title: "Entry 3",
        date: "01-09-2025",
        details: ".......",
    },
];


function addEntry() {
    const titleInput = document.getElementById("entrytitle");
    const dateInput = document.getElementById("entrydate");
    const descriptionInput = document.getElementById("entrythoughts");
    const title = titleInput.value.trim();
    const date = dateInput.value;
    const description = descriptionInput.value.trim();

    if (title & date & description) {
        journalEntries.push({
            title: title,
            date: date,
            details: description,
        });
        renderEntries();
        titleInput.value = "";
        dateInput.value = "";
        descriptionInput.value = "";
    }
}

function deleteEntry(index) {
    journalEntries.splice(index, 1);
    renderEntries();
}

function renderEntries(filteredEntries) {
    const entriesContainer = document.getElementById("entriesContainer");
    entriesContainer.innerHTML = "";

    const entriesToShow = filteredEntries !== undefined ? filteredEntries : journalEntries;

    if (entriesToShow.length === 0) {
        entriesContainer.innerHTML = "<p style='text-align:center;color:#007c80;'>No journal entries found.</p>";
        return;
    }

    const listContainer = document.createElement("ul");
    listContainer.className = "journal-list";

    entriesToShow.forEach((item, idx) => {
        const listItem = document.createElement("li");
        listItem.className = "journal-entry";
        listItem.innerHTML = `
            <div class="entry">
                <div class="entry-header">
                    <h3>${item.title}</h3>
                    <p class="entry-date">${item.date}</p>
                </div>
                <div class="entry-section">
                    <p class="entry-details"><strong>${item.details}</strong></p>
                    <button class="delete-btn" onclick="deleteEntry(${idx})">Delete</button>
                </div>
            </div>
        `;
        listContainer.appendChild(listItem);
    });

    entriesContainer.appendChild(listContainer);
}


document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filtered = journalEntries.filter(entry =>
        entry.title.toLowerCase().includes(query) ||
        entry.date.toLowerCase().includes(query) ||
        entry.details.toLowerCase().includes(query)
    );
    renderEntries(filtered);
});


renderEntries();
