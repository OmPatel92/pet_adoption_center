// Care Cost Calculator
function calculateCost() {
    const petType = document.getElementById('petType').value;
    let cost;

    switch(petType) {
        case 'dog':
            cost = "$1200 per year";
            break;
        case 'cat':
            cost = "$800 per year";
            break;
        case 'rabbit':
            cost = "$500 per year";
            break;
        default:
            cost = "Select a valid pet.";
    }

    document.getElementById('costResult').innerText = `Estimated care cost: ${cost}`;
}
