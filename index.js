
const daftarProduk = [

    { id: 1, namaProduk: "Baju Koko", penjual: "Raja Fashion", tipe: "Baju", gender: 1, stock: 50, img: "produk/bajukoko.jpg", harga: 85000 },
    { id: 2, namaProduk: "Baju Kebaya", penjual: "Rimiyini", tipe: "Baju", gender: 2, stock: 31, img: "produk/kebaya.jpg", harga: 82000 },
    { id: 3, namaProduk: "Celana Pantai", penjual: "Ziri", tipe: "Celana", gender: 2, stock: 23, img: "produk/celana pantai.jpg", harga: 30000 },
    { id: 4, namaProduk: "Hot Pants", penjual: "Ziri", tipe: "Celana", gender: 2, stock: 16, img: "produk/hotpants.jpg", harga: 38000 },
    { id: 5, namaProduk: "Batik Anjay Surabaya", penjual: "Rimiyini", tipe: "Baju", gender: 1, stock: 80, img: "produk/batik.jpg", harga: 85000 },
    { id: 6, namaProduk: "Jaket Bomber", penjual: "Rimiyini", tipe: "Baju", gender: 0, stock: 5, img: "produk/jaketbomber.jpg", harga: 82000 },
    { id: 7, namaProduk: "Hoodie", penjual: "Galaksi Sport", tipe: "Celana", gender: 0, stock: 8, img: "produk/hoodie.jpg", harga: 30000 },
    { id: 8, namaProduk: "Baju Kemeja", penjual: "Eksekusi", tipe: "Celana", gender: 1, stock: 78, img: "produk/kemeja.jpg", harga: 38000 },
    { id: 9, namaProduk: "Kimono", penjual: "Raja Fashion", tipe: "Baju", gender: 1, stock: 52, img: "produk/kimono.jpg", harga: 85000 },
    { id: 10, namaProduk: "Jaket Jeje Citayem", penjual: "CFW", tipe: "Baju", gender: 2, stock: 45, img: "produk/jejecitayem.jpg", harga: 82000 },
    { id: 11, namaProduk: "Baju Pantai", penjual: "Raja Fashion", tipe: "Celana", gender: 0, stock: 23, img: "produk/bajupantai.jpg", harga: 30000 },
    { id: 12, namaProduk: "Celana Jeans Mamen", penjual: "Lepis Indonesia", tipe: "Celana", gender: 1, stock: 45, img: "produk/celanajeansmamen.jpg", harga: 38000 },
    { id: 13, namaProduk: "Celana Jeans Sis", penjual: "Lepis Indonesia", tipe: "Baju", gender: 2, stock: 32, img: "produk/celanajeansis.jpg", harga: 85000 },
    { id: 14, namaProduk: "Kemeja Sis", penjual: "Raja Fashion", tipe: "Baju", gender: 2, stock: 36, img: "produk/kemejasis.jpg", harga: 82000 },
    { id: 15, namaProduk: "Daster Bunda", penjual: "Rimiyini", tipe: "Celana", gender: 2, stock: 39, img: "produk/DasterBunda.jpg", harga: 30000 },
    { id: 16, namaProduk: "Piyama Bakekok", penjual: "Rimiyini", tipe: "Celana", gender: 2, stock: 12, img: "produk/piyama.jpg", harga: 38000 },
    { id: 17, namaProduk: "Baju Adimas", penjual: "Galaksi Sport", tipe: "Baju", gender: 0, stock: 45, img: "produk/adimas.jpg", harga: 85000 },
    { id: 18, namaProduk: "Rok Mimi", penjual: "Ziri", tipe: "Baju", gender: 2, stock: 78, img: "produk/rok mimi.jpg", harga: 82000 },
    { id: 19, namaProduk: "Celana Cut Slay", penjual: "CFW", tipe: "Celana", gender: 2, stock: 56, img: "produk/cutslay.jpg", harga: 30000 },
    { id: 20, namaProduk: "Celana Korporat65", penjual: "Eksekusi", tipe: "Celana", gender: 1, stock: 21, img: "produk/celanakorporat.jpg", harga: 38000 }
]

let isiKeranjang = [];

let cards = document.getElementById("cards")

function ambilProduk(daftarProduk) {
    cards.innerHTML = "";
    for(produk of daftarProduk){
        // membuat card
        let card = document.createElement("div")
        card.classList.add("card")
        card.setAttribute("id", produk.id)

        // memasukkan gambar produk
        let img = document.createElement('img')
        img.src = produk.img
        img.width = "220"
        img.height = "150"
        // img.style.objectFit = "cover"
        card.appendChild(img)

        // memasukkan nama produk
        let nama = document.createElement('span')
        nama.classList.add('nama-barang')
        nama.innerHTML = `<b>${produk.namaProduk}</b>` // !! bold mendingan masuk ke class ga sih?
        card.appendChild(nama)

        // memasukkan penjual
        let penjual = document.createElement('span')
        penjual.classList.add('penjual')
        penjual.innerText = `Penjual: ${produk.penjual}`
        card.appendChild(penjual)

        // memasukkan harga produk
        let harga = document.createElement('span')
        harga.classList.add('harga')
        let hargaString = String(produk.harga)
        if (hargaString.length > 3) {
            let hargaStringDenganTitik = '';
            let moduloTiga = hargaString.length % 3;
            for (let i = 1; i <= hargaString.length; i++) {
                if (i % 3 === moduloTiga & i !== hargaString.length) {
                    hargaStringDenganTitik += hargaString[i-1] + '.'; 
                } else {
                    hargaStringDenganTitik += hargaString[i-1];
                }
            }
            hargaString = hargaStringDenganTitik;
        }
        
        harga.innerText = `Rp ${hargaString},00`
        card.appendChild(harga)
        
        // memasukkan stok item
        let stok = document.createElement('span')
        stok.classList.add('stock') // 
        stok.innerText = `Stok: ${produk.stock}`
        card.appendChild(stok)

        
        // memasukkan tombol 'langsung beli' dan 'tambah keranjang'
        let buttonCard = document.createElement('div')
        
        let langsungBeli = document.createElement('button')
        langsungBeli.classList.add('button') // belom ada class button
        langsungBeli.addEventListener("click", function(event) {
            let idProduk = event.target.parentElement.parentElement.id;
            beliLangsung(idProduk);
        });
        langsungBeli.innerText = 'Langsung Beli'
        buttonCard.appendChild(langsungBeli)

        let tambahKeranjang = document.createElement('button')
        tambahKeranjang.classList.add('button')
        tambahKeranjang.addEventListener("click", function(event) {
            let idProduk = event.target.parentElement.parentElement.id;
            tambahKeKeranjang(idProduk);
        });

        tambahKeranjang.innerText = 'Tambah Keranjang'
        buttonCard.appendChild(tambahKeranjang)

        card.appendChild(buttonCard)
        
        // memasukkan card ke dalam cards
        cards.appendChild(card)
    }
}

function tambahKeKeranjang(idProduk) {

    for (let produk of daftarProduk) {
        if (produk.id == idProduk) {
            if (produk.stock > 0) {
                produk.stock--;
                let salinanProduk = {}
                for (let key of Object.keys(produk)) {
                    if (key === 'img') {
                        salinanProduk[key] = "../" + produk[key];
                    } else {
                        salinanProduk[key] = produk[key];
                    }
                    
                }
                salinanProduk.jumlahPembelian = 0;

                if (isiKeranjang.length === 0) {    
                    isiKeranjang.push(salinanProduk);
                }

                let adaDiKeranjang = false;
                for (let item of isiKeranjang) {
                    if (item.id == idProduk) {
                        item.jumlahPembelian++;
                        adaDiKeranjang = true;
                        break;
                    }
                }

                if (!adaDiKeranjang) {
                    salinanProduk.jumlahPembelian++;
                    isiKeranjang.push(salinanProduk);
                }


                ambilProduk(daftarProduk);
            } else {
                alert("Mohon maaf barang sudah habis");
            }
        }
    }
    localStorage.isiKeranjang = JSON.stringify(isiKeranjang);
}

function beliLangsung(idProduk) {
    tambahKeKeranjang(idProduk);
    localStorage.isiKeranjang = JSON.stringify(isiKeranjang);
    window.location.href = "./cart/cart.html";    
}


ambilProduk(daftarProduk);
