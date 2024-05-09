
function validation(){
    let username = document.getElementById('name-input').value;
    console.log(username);    
    if (username == '' || username == null) {
        alert('Inputan Nama Anda Kosong, Periksa Kembali');
    } 
    else{
        alert('Welcome ' + username)
        console.log(username);  
    }
    let emailaddress = document.getElementById('email-input').value;
    console.log(emailaddress)
    if (emailaddress == '' || emailaddress == null) {
        alert('Inputan Email Anda Kosong, Periksa Kembali');
    }
    let option = document.getElementById('option-input').value;
    console.log(option)
    if (option == '' || option == null) {
        alert('Inputan Opsi Anda Kosong, Periksa Kembali');
    }
}

let indexSlide = 0;

function nextSlide(n) {
    console.log('nextSlide: ' + n);
    showSlide(indexSlide += n);
}

function previousSlide(n) {
    console.log('previousSlide: ' + n);
    showSlide(indexSlide -= n);
}

function showSlide(index) {
    let listImage = document.getElementsByClassName('banner-item');
    console.log(listImage);

    if (index > listImage.length) indexSlide = 1;
    if (index < 1) indexSlide = listImage.length;
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    listImage[indexSlide - 1].style.display = 'block';

    console.log('showSlide: ' + index);
}

document.querySelector('.next-button').addEventListener('click', () => nextSlide(1));
document.querySelector('.prev-button').addEventListener('click', () => previousSlide(1));
document.getElementById('button-form').addEventListener('click', () => validation())