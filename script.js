// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn"); // Select all navigation buttons
    const contents = document.querySelectorAll(".tab-content"); // Select all tab content sections

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Hide all content sections, including the "Welcome" section
            contents.forEach(content => content.classList.add("hidden"));

            // Get the ID of the tab linked to the clicked button
            const tab = button.getAttribute("data-tab");

            // Show the selected tab content
            const activeContent = document.getElementById(tab);
            if (activeContent) {
                activeContent.classList.remove("hidden"); // Display the clicked tab's content
            }
            console.log(`Tab switched to: ${tab}`);
        });
    });
});
