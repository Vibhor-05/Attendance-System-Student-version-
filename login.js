// Function to switch between student and teacher forms
function openForm(role) {
    // Get both forms
    const studentForm = document.getElementById('student-form');
    const teacherForm = document.getElementById('teacher-form');

    // Get both tab buttons
    const studentTab = document.querySelector('.tab-link[onclick*="student"]');
    const teacherTab = document.querySelector('.tab-link[onclick*="teacher"]');

    if (role === 'student') {
        // Show student form, hide teacher form
        studentForm.classList.add('active-form');
        teacherForm.classList.remove('active-form');
        
        // Set active tab style
        studentTab.classList.add('active');
        teacherTab.classList.remove('active');
    } else {
        // Show teacher form, hide student form
        teacherForm.classList.add('active-form');
        studentForm.classList.remove('active-form');

        // Set active tab style
        teacherTab.classList.add('active');
        studentTab.classList.remove('active');
    }
}

// Handle Student Form Submission
document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    const studentId = document.getElementById('student-id').value;
    if (studentId) {
        // Store student ID in localStorage for use in the attendance portal
        localStorage.setItem('studentId', studentId);
        
        // Redirect to attendance portal
        window.location.href = 'attendance.html';
    } else {
        alert("Please enter a Student ID.");
    }
});

// Handle Teacher Form Submission
document.getElementById('teacher-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    const teacherId = document.getElementById('teacher-id').value;
    if (teacherId) {
        // For teacher login, you might redirect to a different page
        alert(`Teacher Login successful! Welcome, ${teacherId}`);
        // Add actual login logic here
    } else {
        alert("Please enter a Teacher ID.");
    }
});