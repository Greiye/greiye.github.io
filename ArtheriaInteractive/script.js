// Define the roll table
const rollTable = {
    1: "Treasure chest with gold coins",
    2: "Magical potion of healing",
    3: "Ancient scroll with a spell",
    4: "Enchanted sword",
    5: "Rare gemstone",
    6: "Monster encounter: Goblin ambush",
    7: "Monster encounter: Giant spider",
    8: "Monster encounter: Ooze slime",
    9: "Empty room with suspicious markings",
    10: "Trap door leading to a hidden chamber"
};

// Function to roll on the table
function rollOnTable() {
    const min = 1; // Minimum roll value
    const max = 10; // Maximum roll value
    const rollResult = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number between 1 and 10
    const result = rollTable[rollResult]; // Get the result from the roll table based on the random number
    return result;
}

// Function to display the roll result
function displayResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = "You rolled on the table and got: " + rollOnTable();
}

// Add event listener to the roll button
const rollButton = document.getElementById('rollButton');
rollButton.addEventListener('click', displayResult);
