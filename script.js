// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn"); // Select all navigation buttons
    const contents = document.querySelectorAll(".tab-content"); // Select all tab content sections

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Hide all content sections, including the "Welcome" section
            contents.forEach(content => content.classList.add("hidden"));

            // Get the ID of the corresponding tab from the button's data-tab attribute
            const tab = button.getAttribute("data-tab");

            // Find the tab content section that matches the retrieved ID
            const activeContent = document.getElementById(tab);

            // If the matching tab content exists, remove the "hidden" class to display it
            if (activeContent) {
                activeContent.classList.remove("hidden");
            }
        });
    });
});
