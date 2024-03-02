function uzakAnimasyonBitti() {
    var periyodik1 = document.getElementById('periyodik1');
    periyodik1.style.display = 'flex';
    periyodik1.style.animation = 'periyotan 2.5s linear 1 forwards';
}

function periyodikAnimasyonBitti() {
    var periyodik1 = document.getElementById('periyodik1');
    periyodik1.style.display = 'none'; 
    var periyodik2 = document.getElementById('periyodik2');
    periyodik2.style.display = 'flex';
    periyodik2.style.animation = 'periyotan 2s linear 1 forwards'; 
}

var uzakAlan = document.getElementById('kücülen_alan');
uzakAlan.addEventListener('animationend', uzakAnimasyonBitti);

var periyodikDiv = document.getElementById('periyodik1');
periyodikDiv.addEventListener('animationend', periyodikAnimasyonBitti);