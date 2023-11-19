const accordions = document.getElementsByClassName('content-container');

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        // Toggle the 'active' class for the clicked accordion
        this.classList.toggle('active');

        // Close other accordions
        for (let j = 0; j < accordions.length; j++) {
            if (j !== i) {
                accordions[j].classList.remove('active');
            }
        }
    });
}

// Close accordion when clicking outside
window.addEventListener('click', (e) => {
    for (let i = 0; i < accordions.length; i++) {
        if (!accordions[i].contains(e.target)) {
            accordions[i].classList.remove('active');
        }
    }
});
