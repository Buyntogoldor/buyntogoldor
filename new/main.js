// Google Sign-In амжилттай болсны дараа дуудагдах функц
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    
    // Хэрэглэгчийн мэдээллийг дэлгэцэнд харуулах
    document.getElementById('name').textContent = 'Name: ' + profile.getName();
    document.getElementById('email').textContent = 'Email: ' + profile.getEmail();
    document.getElementById('image').src = profile.getImageUrl();
    
    // Google Sign-In товчлуурыг нууцлах
    document.querySelector('.g-signin2').style.display = 'none';
    
    // Хэрэглэгчийн мэдээллийг хадгалах
    localStorage.setItem('user_name', profile.getName());
    localStorage.setItem('user_email', profile.getEmail());
    localStorage.setItem('user_image', profile.getImageUrl());
    
    // Цаг агаарын хуудас руу шилжих
    window.location.href = "weather0.html";  // weather0.html руу шилжих
}

// Sign Out функц
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        // Хэрэглэгчийн мэдээллийг цэвэрлэх
        document.getElementById('name').textContent = '';
        document.getElementById('email').textContent = '';
        document.getElementById('image').src = '';
        
        // Google Sign-In товчлуурыг дахин харуулах
        document.querySelector('.g-signin2').style.display = 'block';
        
        // Хэрэглэгчийн мэдээллийг устгах
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_image');
        alert('User signed out.');
    });
}

// Хэрэглэгчийн мэдээлэл байсан бол дахин үзүүлэх
window.onload = function () {
    var userName = localStorage.getItem('user_name');
    var userEmail = localStorage.getItem('user_email');
    var userImage = localStorage.getItem('user_image');
    
    if (userName && userEmail && userImage) {
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('name').textContent = 'Name: ' + userName;
        document.getElementById('email').textContent = 'Email: ' + userEmail;
        document.getElementById('image').src = userImage;
        document.querySelector('.g-signin2').style.display = 'none';
    }
}
