

async function handleBookingFormSubmit(e){
    e.preventDefault()
    showLoader()
    await sendBookingInfo()
  
    Swal.fire(
      'Success!',
      'You booked a bike successfully!',
      'success')
  
    hide(document.getElementById('booking-form'))
  
    show(document.getElementById('booking-summary'))
  
    hideLoader()
}

function showLoader() {
  show(document.getElementById('loader'))
}

function hideLoader() {
  hide(document.getElementById('loader'))
}

function sendBookingInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
}

function showBookingForm(e){
  e.preventDefault()
  hide(document.getElementById('operator-registration-form'))
  show(document.getElementById('booking-form'))
}

function showOperatorRegistrationForm(e){
  e.preventDefault()
  
  show(document.getElementById('operator-registration-form'))
  hide(document.getElementById('booking-form'))
}

function hide(element) {
  element.setAttribute('hidden', '');
}

function show(element) {
  element.removeAttribute('hidden')
}

//events
window.onload = hideLoader
document.getElementById('booking-form').onsubmit=handleBookingFormSubmit
Array.from(document.getElementsByClassName('show-booking-form')).forEach(btn=>{
  btn.onclick = showBookingForm
})
Array.from(document.getElementsByClassName('show-operator-registration-form')).forEach(btn => {
  btn.onclick = showOperatorRegistrationForm
})

let lastBackPressTime = 0;

window.addEventListener('popstate', function (event) {
  const currentTime = new Date().getTime();
  // if the user presses the back button twice in less than 2 seconds, close the app
  if (currentTime - lastBackPressTime < 2000) {
    window.close();
  } else {
    lastBackPressTime = currentTime;
    // add a new history entry to prevent the user from leaving the app unintentionally
    console.log('back pressed')
    window.history.pushState(null, null, window.location.href);
  }
});
