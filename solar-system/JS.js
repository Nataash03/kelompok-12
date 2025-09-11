function showInfo(name, desc) {
  const infoBox = document.getElementById('info');
  infoBox.style.display = 'block';
  infoBox.innerHTML = `<b>${name}</b>: ${desc}`;
}
