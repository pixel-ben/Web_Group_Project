let selectedWeapon = "";

function selectWeapon(weapon) {
    selectedWeapon = weapon;
    document.getElementById("chosen-weapon").innerText = `Selected Weapon: ${weapon}`;


// Descriptions for each weapon
const descriptions = {
	Sword: "A strong reliable weapon seem's somewhat battle damaged and fragile though.\nDamage - High\nDefense - Normal\nspeed - Average\nRange - Average\nDurability - Weak",
	dagger: "A very fast and reliable weapon seem's very new and un-used, best fitted for stealth attacks.\nDamage - Noraml\nDefense - Low\nspeed - Fast\nRange - Low\nDurability - High",
	axe: "A heavy and powerful weapon only to be weilded by the strongest warriors best used for brute strength attacks.\nDamage - Extremly High\nDefense - Low\nspeed - Slow\nRange - High\nDurability - Average",
	club: "A big club, looks like someone ripped a branch of a tree and put a skull on the end the branch seems to be rotting too.\nDamage - Low\nDefense - Low\nspeed - Average\nRange - Average\nDurability - weak"
};

   document.getElementById("weapon-description").innerText = descriptions[weapon];

   // Update description
   document.getElementById("weapon-description").innerText = descriptions[weapon];

	
    // Remove previous selection
    document.querySelectorAll('.weapon').forEach(w => w.classList.remove('selected'));

    // Highlight selected weapon
	const weaponId = weapon.toLowerCase();
	const weaponElement = document.getElementById(weaponId);
	if (weaponElement) {
		weaponElement.classList.add('selected');
		}	
}


// confirm next page after choice of weapon
function confirmChoice() {
    if (selectedWeapon) {
        localStorage.setItem("chosenWeapon", selectedWeapon); // Save weapon in localStorage
        alert(`You chose ${selectedWeapon}! Moving to the next step.`);
        window.location.href = "luc_boss_fight.html"; // Redirect to next page
    } else {
        alert("Please select a weapon before continuing!");
    }
}

function pickRandomWeapon() {
	const weapons = ["Sword", "Dagger", "Axe", "Club"];
	const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];
	selectWeapon(randomWeapon);
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
