function SetTime(){
    const current = new Date();
    const date = current.toLocaleDateString();
    document.getElementById('time').innerHTML = `${date}`;
}
function SetDate() {
  const current = new Date();
  const time = current.toLocaleTimeString();
  document.getElementById('date').innerHTML = `${time}`;
}

SetDate();
SetTime();

setInterval(SetDate, 1000);
setInterval(SetTime, 1000);

function searchAndRedirect() {
const searchTerm = document.getElementById('searchInput').value;
if (searchTerm.trim() !== '') {
window.location.href = `https://open.spotify.com/search/${encodeURIComponent(searchTerm)}`;
console.log(searchTerm);
} else {
alert('Please enter a valid search.');
}
}

