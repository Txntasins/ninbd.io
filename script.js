// Store the wishes
const myWishText = "I wish you endless happiness, a life full of our favorite moments, and for that beautiful smile to never leave your face. I love you!";
let herWishText = "";

// Helper function to change pages
function goToPage(from, to) {
    document.getElementById(`page${from}`).classList.remove('active');
    document.getElementById(`page${to}`).classList.add('active');
}

// PAGE 1: Blow out candle
document.getElementById('candle-trigger').addEventListener('click', function() {
    // Hide flame
    document.getElementById('flame').style.display = 'none';
    
    // Show continue button after a short delay
    setTimeout(() => {
        document.getElementById('continue1').style.display = 'block';
    }, 500);
});

// Navigation Event Listeners
document.getElementById('continue1').addEventListener('click', () => goToPage(1, 2));
document.getElementById('continue2').addEventListener('click', () => goToPage(2, 3));

// PAGE 3 to 4: Save her wish before moving on
document.getElementById('continue3').addEventListener('click', () => {
    const input = document.getElementById('girlfriend-wish').value.trim();
    
    // If she didn't type anything, provide a cute default fallback
    herWishText = input !== "" ? input : "To be the happiest girl in the world! ✨";
    
    goToPage(3, 4);
});

// PAGE 4 to 5: Display combined wishes
document.getElementById('continue4').addEventListener('click', () => {
    document.getElementById('final-my-wish').innerText = `His Wish: "${myWishText}"`;
    document.getElementById('final-her-wish').innerText = `Her Wish: "${herWishText}"`;
    
    goToPage(4, 5);
});

// PAGE 5: Reverse Time (Reset everything)
document.getElementById('reverse-time').addEventListener('click', () => {
    // Reset inputs and displays
    document.getElementById('flame').style.display = 'block';
    document.getElementById('continue1').style.display = 'none';
    document.getElementById('girlfriend-wish').value = '';
    
    // Animate backward to page 1
    goToPage(5, 1);
});
