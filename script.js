function volume_sphere(e) {
e.preventDefault();
const radius = document.getElementById("Radius").value;
const volume = (4 / 3) Math.PI Math.pow(radius, 3);
document.getElementById("volume").value = volume.toFixed(2);
}
window.onload = function() {
const calculateButton = document.getElementById("Calculate");
calculateButton.addEventListener("click", volume_sphere);
};