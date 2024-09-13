function toggleDetails(doctorId) {
  const details = document.getElementById(doctorId);

  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";

  } else {
    details.style.display = "none";
  }
}