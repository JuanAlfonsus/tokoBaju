let isiKeranjang = [
    { id: 8, namaProduk: "Baju Kemeja", penjual: "Eksekusi", tipe: "Celana", gender: 1, stock: 78, img: "../produk/kemeja.jpg", harga: 38000, jumlahPembelian: 3},
    { id: 9, namaProduk: "Kimono", penjual: "Raja Fashion", tipe: "Baju", gender: 1, stock: 52, img: "../produk/kimono.jpg", harga: 85000, jumlahPembelian: 1},
    { id: 10, namaProduk: "Jaket Jeje Citayem", penjual: "CFW", tipe: "Baju", gender: 2, stock: 45, img: "../produk/jejecitayem.jpg", harga: 82000, jumlahPembelian: 15}
];

isiKeranjang = JSON.parse(localStorage.isiKeranjang);

let pinjemGrandTotal = 0

function buatStruk(isiKeranjang) {
    // Mengakses tabel struk
    let tabelStruk = document.getElementsByClassName('table-struk')[0];
    let grandTotal = 0;

    // Memasukkan produk/item
    for (item of isiKeranjang) {
        
        // Memasukkan baris
        let barisItem = tabelStruk.insertRow(-1);

        // Memasukkan gambar ke sel pertama
        let selGambar = barisItem.insertCell(0);
        let divItem = document.createElement("div");
        divItem.classList.add("barang");
        let gambarItem = document.createElement("img");
        gambarItem.width = "250"
        gambarItem.height = "300"
        gambarItem.src = item.img;
        divItem.appendChild(gambarItem)
        selGambar.appendChild(divItem)
       
        // Memasukkan nama ke sel kedua
        let selNama = barisItem.insertCell(1);
        selNama.innerText = item.namaProduk;
        
        // Memasukkan jumlah pembelian ke sel ketiga
        let selJumlah = barisItem.insertCell(2);
        selJumlah.innerText = item.jumlahPembelian;

        // Memasukkan 'x' ke sel keempat
        let selX = barisItem.insertCell(3);
        selX.innerText = 'x';

        // Memasukkan harga ke sel kelima
        let selHarga = barisItem.insertCell(4);
        selHarga.setAttribute("colspan", "2");
        selHarga.innerText = item.harga;

        // Memasukkan total harga ke sel keenam
        let selTotalHarga = barisItem.insertCell(5);
        let totalHarga = item.harga * item.jumlahPembelian
        selTotalHarga.innerText = `${totalHarga}`;
        
        grandTotal += totalHarga
        pinjemGrandTotal = grandTotal
    }    

    // Menghitung grand total
    let barisItem = tabelStruk.insertRow(-1);
    let judulGrandTotal = barisItem.insertCell(0);
    judulGrandTotal.setAttribute("colspan", "6");
    judulGrandTotal.setAttribute("id", "grand-total");
    judulGrandTotal.innerHTML = `<b>Grand Total</b>`;
    barisItem.insertCell(1).innerHTML = `<b>${grandTotal}</b>`;
}

buatStruk(isiKeranjang);


// membuat function pada radio button

const buttonBayar = document.getElementById('button-bayar')
const instruksiBca = document.getElementById('instruksi-bca')
const instruksiQrcode = document.getElementById('instruksi-qrcode')
const instruksiMandiri = document.getElementById('instruksi-mandiri')
let metodeBayar = ''
let kurir = ''


document.getElementById('button-bayar').onclick = function(){
    let radioButton = document.getElementsByName('pembayaran')
    for(button of radioButton){
        if(button.checked){
            if(button.id == "bca"){
                instruksiBca.style.display = "block"
                instruksiQrcode.style.display = "none"
                instruksiMandiri.style.display = "none"
                metodeBayar = 'BCA'
            } else if(button.id == "mandiri"){
                instruksiBca.style.display = "none"
                instruksiQrcode.style.display = "none"
                instruksiMandiri.style.display = "block"
                metodeBayar = 'Mandiri'
            } else if(button.id == "qrcode"){
                instruksiBca.style.display = "none"
                instruksiQrcode.style.display = "block"
                instruksiMandiri.style.display = "none"
                metodeBayar = 'QRCODE'
            }
        }
    }
    let radioKurir = document.getElementsByName('kurir')
    for(button of radioKurir){
        if(button.checked){
            if(button.id == "jne"){
                kurir = 'JNE'
            } else if(button.id == "jnt"){
                kurir = 'JNT'
            }
        }
    }

}

// membuat function hadiah

const modal100 = document.getElementById('100k')
const modal200 = document.getElementById('200k')
const modal300 = document.getElementById('300k')
const strukBelanja  = document.getElementById('struk-belanja')
const inputNama = document.getElementById('input-nama')
const inputHp = document.getElementById('input-hp')
const inputAlamat = document.getElementById('form-textarea')
const strukNama = document.getElementById('struk-nama')
const strukAlamat = document.getElementById('struk-alamat')
const jenisPembayaran = document.getElementById('struk-jenis-pembayaran')
const strukTotal = document.getElementById('struk-total')
const strukKurir = document.getElementById('struk-kurir')

buttonBayar.addEventListener('click', function(){
    if(pinjemGrandTotal > 100000){
        modalPromo.style.display = "block"
    }
    if(pinjemGrandTotal > 300_000){
        // console.log('Dapet mug')
        modal300.style.display = "block"
    } 
    else if(pinjemGrandTotal > 200000){
        modal200.style.display = "block"
    } else if(pinjemGrandTotal > 100000){
        modal100.style.display = "block"
    }
    strukBelanja.style.display = "block"
    strukNama.innerHTML = inputNama.value
    strukAlamat.innerHTML = inputAlamat.value
    strukKurir.innerHTML = kurir
    jenisPembayaran.innerHTML = metodeBayar
    strukTotal.innerHTML = pinjemGrandTotal
})

const modalPromo = document.getElementById('modal-promo')
const close = document.getElementsByClassName('close')[0]

close.addEventListener('click', function(){
    // console.log('test')
    modalPromo.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modalPromo) {
        modalPromo.style.display = "none";
    }
}



// console.log(pinjemGrandTotal)