let paragraf = document.getElementById('tekst');
let przyciskdodaj = document.getElementById('dodaj');
let przyciskusun = document.getElementById('usun');

przyciskdodaj.onclick = function () {
    paragraf.textContent = 'Teraz widzisz tekst';
}
przyciskusun.onclick = function () {
    paragraf.textContent = '';
}