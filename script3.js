document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[download]");
    const searchInput = document.querySelector("#search"); // Corrected selector for search input
    
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            alert(`Click ok to continue to download: ${event.target.textContent}`);
        });
    });

    // Search functionality
    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();
        links.forEach(link => {
            const presentationName = link.textContent.toLowerCase();
            if (presentationName.includes(filter)) {
                link.parentElement.style.display = "block";
            } else {
                link.parentElement.style.display = "none";
            }
        });
    });
});
