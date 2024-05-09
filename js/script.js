// Select all navigation buttons inside the header
const headerNavButtons = document.querySelectorAll('header .nav-button');

// Attach click event listeners to each navigation button
headerNavButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the ID of the section to scroll to
        const sectionId = button.id.replace('button-', '');

        // Find the corresponding section
        const section = document.querySelector(`#${sectionId}`);

        // Scroll to the section if it exists
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Form validation function
function validation() {
    let username = document.getElementById('name-input').value;
    let emailaddress = document.getElementById('email-input').value;
    let option = document.getElementById('option-input').value;
    
    if (username === '' || emailaddress === '' || option === '') {
        alert('Please fill out all fields.');
        return false;
    } else {
        alert('Welcome ' + username);
        return true;
    }
}

// Attach submit event listener to the form button
document.getElementById('button-form').addEventListener('click', (event) => {
    event.preventDefault();
    if (validation()) {
        alert('Form submitted successfully!');
    }
});

// Image slider
let indexSlide = 0;

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function previousSlide(n) {
    showSlide(indexSlide -= n);
}

function showSlide(index) {
    let listImage = document.getElementsByClassName('banner-item');

    if (index > listImage.length) indexSlide = 1;
    if (index < 1) indexSlide = listImage.length;
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = 'none';
    }
    listImage[indexSlide - 1].style.display = 'block';
}

// Automatic slide change every 2 seconds
setInterval(() => nextSlide(1), 2000);
