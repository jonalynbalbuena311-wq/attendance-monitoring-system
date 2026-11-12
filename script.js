function updateDate() {
    const dateElement = document.getElementById("smallDate");

    if (dateElement) {
        const today = new Date();

        dateElement.textContent = today.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }
}

updateDate();