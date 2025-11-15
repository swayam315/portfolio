// Login authentication check for admin panel
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    const loginTime = localStorage.getItem('loginTime');
    
    // If not logged in or login was more than 24 hours ago, redirect to login
    if (!isLoggedIn || !loginTime) {
        window.location.href = 'login.html';
        return;
    }
    
    const loginDate = new Date(loginTime);
    const currentDate = new Date();
    const hoursDiff = Math.abs(currentDate - loginDate) / 36e5; // Difference in hours
    
    // If more than 24 hours since login, require re-login
    if (hoursDiff > 24) {
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('loginTime');
        window.location.href = 'login.html';
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('adminLoggedIn');
            localStorage.removeItem('loginTime');
            window.location.href = 'login.html';
        });
    }
});