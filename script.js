function showCategory(category) {
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const selectedTab = document.querySelector(`.tab-button[onclick="showCategory('${category}')"]`);
    selectedTab.classList.add('active');

    const boxes = document.querySelectorAll('.portfolio-box');
    boxes.forEach(box => {
        if (box.classList.contains(category)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

// Initially show Visualization projects
document.addEventListener('DOMContentLoaded', () => {
    showCategory('visualization');
});
