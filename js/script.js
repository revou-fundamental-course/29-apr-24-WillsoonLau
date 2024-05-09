document.addEventListener('DOMContentLoaded', function() {
    const headerNavButtons = document.querySelectorAll('header .nav-button');

    headerNavButtons.forEach(button => {
        button.addEventListener('click', () => {

            const sectionId = button.id.replace('button-', '');

            const section = document.querySelector(`#${sectionId}`);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

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

    document.getElementById('button-form').addEventListener('click', (event) => {
        event.preventDefault();
        if (validation()) {
            alert('Form submitted successfully!');
        }
    });

    let indexSlide = 0;

    function nextSlide() {
        showSlide(indexSlide += 1);
    }

    function previousSlide() {
        showSlide(indexSlide -= 1);
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

    document.querySelector('.prev-button').addEventListener('click', previousSlide);
    document.querySelector('.next-button').addEventListener('click', nextSlide);

    setInterval(nextSlide, 2000);
});
