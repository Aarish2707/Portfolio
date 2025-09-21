document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        setTimeout(() => {
            showSuccessPopup();
        }, 500);
        window.history.replaceState({}, document.title, window.location.pathname + '#contact');
    }
});

function showSuccessPopup() {
    document.getElementById('successPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('successPopup').style.display = 'none';
}

window.onclick = function(event) {
    const popup = document.getElementById('successPopup');
    if (event.target === popup) {
        closePopup();
    }
}