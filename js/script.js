
function validation(){
    let username = document.getElementById('name-input').value;
    console.log(username);    
    if (username == '' || username == null) {
        alert('Inputan Anda Kosong, Periksa Kembali');
    } else{
        alert('Welcome ' + username)
        console.log(username);  
    }
}
let indexSlide = 1; //[0,1,2]
showSlide(1);

function nextSlide(n){
    console.log('nextSlide' + n);
    showSlide(indexSlide += n)
    
}
function showSlide(index){
    console.log('showSlide' + index)
}
document.getElementById('button-form').addEventListener('click', () => validation())