// Add active class to nav items
document.querySelectorAll('.nav-items li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-items li.active')?.classList.remove('active');
        item.classList.add('active');
    });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    // Add search functionality here
    console.log('Searching for:', e.target.value);
});

// Logout button
document.querySelector('.logout-btn').addEventListener('click', () => {
    console.log('Logging out...');
});

// Book Now button
document.querySelector('.book-now-btn').addEventListener('click', () => {
    console.log('Opening booking modal...');
});