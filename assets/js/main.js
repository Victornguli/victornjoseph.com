window.onload = function () {
    footerYear = document.querySelector("#footer-year");
    footerYear.innerHTML = this.getCurrentYear();
}


// Get current year for footer copyright display
function getCurrentYear() {
    now = new Date()
    return now.getFullYear();
}