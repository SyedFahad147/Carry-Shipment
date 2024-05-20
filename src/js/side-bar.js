window.onload = () => {
    let header = document.getElementById("header");
    if (header) header.classList.add("profile-header");
    let getSidebar = document.querySelector(".profile-page nav");
    let getToggle = document.querySelectorAll(".profile-page .toggle");
    let handleToggleClick = () => {
        if (getSidebar) getSidebar.classList.toggle("active");
    };
    getToggle.forEach((toggle) => {
        toggle.addEventListener("click", handleToggleClick);
    });
}
