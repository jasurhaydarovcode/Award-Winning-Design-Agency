function hide(elementId) {
    let list = document.getElementById(elementId);
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}