// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn"); // Select all navigation buttons
    const contents = document.querySelectorAll(".tab-content"); // Select all tab content sections

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Add "hidden" class to all sections, including the "Welcome" section
            contents.forEach(content => content.classList.add("hidden")); 

            // Get the ID of the tab linked to the clicked button
            const tab = button.getAttribute("data-tab");

            // Display the matching tab content by removing its "hidden" class
            const activeContent = document.getElementById(tab);
            if (activeContent) {
                activeContent.classList.remove("hidden"); 
            }
        });
    });
});
