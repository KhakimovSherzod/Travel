const firstMail = document.querySelector('.search-input');
const eMail = document.querySelector('.email-input');
const btn = document.querySelector('.button');

function clearInput(event) {
    if (event.key === "Enter") {
      firstMail.value = '';
    }
  }
btn.addEventListener('click', () => {
  eMail.value = '';
})
const goBackBtn = document.getElementById('goUpBtn');
goBackBtn.addEventListener('click', function goUp() {
    window.scrollTo({ top:0, behavior: 'smooth'})
} );

