const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");

const today = new Date().toISOString().split("T")[0];

checkIn.min = today;

checkIn.addEventListener("change", function () {
    const checkInDate = new Date(checkIn.value);
    checkOut.min = new Date(checkInDate.setDate(checkInDate.getDate() + 1)).toISOString().split("T")[0];
});
