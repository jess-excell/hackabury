// Wait for the DOM (Document Object Model) to load completely before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Select all navigation buttons with the class "tab-btn"
    const buttons = document.querySelectorAll(".tab-btn");

    // Select all tab content sections with the class "tab-content"
    const contents = document.querySelectorAll(".tab-content");

    // Loop through each button to add a click event listener
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Hide all tab content sections by adding the "hidden" class to each
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
