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

// const radioButton = document.querySelector('input[name="pembayaran"]:checked').value
const buttonBayar = document.getElementById('button-bayar')
const instruksiBca = document.getElementById('instruksi-bca')
const instruksiQrcode = document.getElementById('instruksi-qrcode')
const instruksiMandiri = document.getElementById('instruksi-mandiri')


document.getElementById('button-bayar').onclick = function(){
    radioButton = document.getElementsByName('pembayaran')
    for(button of radioButton){
        if(button.checked){
            console.log(button.id)
            if(button.id == "bca"){
                instruksiBca.style.display = "block"
                instruksiQrcode.style.display = "none"
                instruksiMandiri.style.display = "none"
            } else if(button.id == "mandiri"){
                instruksiBca.style.display = "none"
                instruksiQrcode.style.display = "none"
                instruksiMandiri.style.display = "block"
            } else if(button.id == "qrcode"){
                instruksiBca.style.display = "none"
                instruksiQrcode.style.display = "block"
                instruksiMandiri.style.display = "none"
            }
        }
    }
}

const modal100 = document.getElementById('100k')
const modal200 = document.getElementById('200k')
const modal300 = document.getElementById('300k')

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