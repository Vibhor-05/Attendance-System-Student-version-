document.addEventListener('DOMContentLoaded', function() {
    // Check if student is logged in
    const studentId = localStorage.getItem('studentId');
    if (!studentId) {
        // If not logged in, redirect to login page
        window.location.href = 'index.html';
        return;
    }
    
    // Update welcome message with student ID
    document.getElementById('welcome-message').textContent = `Welcome, ${studentId}`;
    
    // Update profile information with student ID
    document.getElementById('profile-name').textContent = studentId;
    document.getElementById('profile-roll').textContent = studentId;
    
    // Update profile image with student ID as seed
    document.getElementById('profile-image').src = `https://picsum.photos/seed/${studentId}/180/180.jpg`;
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
    
    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            // Clear student data from localStorage
            localStorage.removeItem('studentId');
            
            // Redirect to login page
            window.location.href = 'index.html';
        }
    });
    
    // Report form submission
    document.getElementById('attendance-report-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const subject = document.getElementById('subject').value;
        const date = document.getElementById('date').value;
        const message = document.getElementById('message').value;
        
        // Show success message
        const messageDiv = document.getElementById('report-message');
        messageDiv.className = 'alert alert-success';
        messageDiv.textContent = `Your attendance issue for ${subject} on ${date} has been reported successfully. The teacher will review it soon.`;
        messageDiv.style.display = 'block';
        
        // Reset form
        this.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    });
    
    // Set today's date as default for the report form
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('max', today);
});