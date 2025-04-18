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

// Set the date we're counting down to
var countDownDate = new Date("May 27, 2025 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
