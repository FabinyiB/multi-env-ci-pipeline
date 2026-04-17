const params = new URLSearchParams(window.location.search);
const environment = params.get('env') ? params.get('env').toUpperCase() : 'DEV';
const label = document.getElementById('env-label');
label.innerHTML = `Current environment: <strong>${environment}</strong>`;
