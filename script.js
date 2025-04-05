// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn"); // Select all navigation buttons
    const contents = document.querySelectorAll(".tab-content"); // Select all tab content sections

    // Event listener for each button
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Hide all content sections, including the "Welcome" section
            contents.forEach(content => content.classList.add("hidden")); // Adds "hidden" class to all sections
            
            // Get the ID of the corresponding tab from the button's data-tab attribute
            const tab = button.getAttribute("data-tab");

            // Find and display the matching tab content
            const activeContent = document.getElementById(tab);
            if (activeContent) {
                activeContent.classList.remove("hidden"); // Removes "hidden" class from the clicked tab's content
            }
        });
    });
});
