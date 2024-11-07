// Function to show projects based on category
function showCategory(category) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to the selected tab
    const selectedTab = document.querySelector(`.tab-button[onclick="showCategory('${category}')"]`);
    selectedTab.classList.add('active');

    // Show or hide portfolio boxes based on category
    document.querySelectorAll('.portfolio-box').forEach(box => {
        if (box.classList.contains(category)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

// Initialize with the default category (Visualization)
document.addEventListener('DOMContentLoaded', () => {
    showCategory('visualization');
});
