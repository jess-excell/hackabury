// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn"); // Select all navigation buttons
    const contents = document.querySelectorAll(".tab-content"); // Select all tab content sections

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Hide all content sections
            contents.forEach(content => content.classList.add("hidden"));

            // Show the selected tab's content
            const tab = button.getAttribute("data-tab"); // Get the tab ID from the button's data-tab attribute
            const activeContent = document.getElementById(tab); // Select the corresponding content section
            if (activeContent) {
                activeContent.classList.remove("hidden"); // Remove the hidden class to display the content
            }
        });
    });
});
