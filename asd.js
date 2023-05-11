const checkbox1 = document.getElementById('cekBajuPria');
checkbox1.addEventListener('change', (event) => {
    if (event.target.checked) {
        console.log(`Checkbox ${checkbox1.innerHTML}`);
    } else {
        console.log('Checkbox is not checked');
    }
});



const parentElement = document.getElementById('parentCards');
const cardsDiv = parentElement.firstElementChild;
cardsDiv.innerHTML = '';




function filter(data) {
    for (i in daftarProduk) {
        let perBarang = daftarProduk[i]
        let namaPerBarang = daftarProduk[i].namaProduk
        let hargaPerBarang = daftarProduk[i].harga
        let tipePerBarang = daftarProduk[i].tipe
        let genderPerBarang = daftarProduk[i].gender
        switch (genderPerBarang) {
            case 1:
                genderPerBarang = 'Pria'
                break;
            case 2:
                genderPerBarang = 'Wanita'
                break;
            default:
                genderPerBarang = 'Omnisex'
                break;
        }
    }

}