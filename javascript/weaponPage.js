let selectedWeapon = "";

function selectWeapon(weapon) {
    selectedWeapon = weapon;
    document.getElementById("chosen-weapon").innerText = `Selected Weapon: ${weapon}`;

    // Remove previous selection
    document.querySelectorAll('.weapon').forEach(w => w.classList.remove('selected'));

    // Highlight selected weapon
    event.target.closest('.weapon').classList.add('selected');
}


// confirm next page after choice of weapon
function confirmChoice() {
    if (selectedWeapon) {
        localStorage.setItem("chosenWeapon", selectedWeapon); // Save weapon in localStorage
        alert(`You chose ${selectedWeapon}! Moving to the next step.`);
        window.location.href = "next_page.html"; // Redirect to next page
    } else {
        alert("Please select a weapon before continuing!");
    }
}

// Load saved weapon if user comes back to this page
window.onload = function() {
    let savedWeapon = localStorage.getItem("chosenWeapon");
    if (savedWeapon) {
        document.getElementById("chosen-weapon").innerText = `Selected Weapon: ${savedWeapon}`;

        // Highlight the previously selected weapon
        document.getElementById(savedWeapon.toLowerCase()).classList.add("selected");
    }
};