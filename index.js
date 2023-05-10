const daftarProduk = [

    { id: 1, namaProduk: "Baju Koko", tipe: "Baju", gender: 1, stock: 50, img: "produk/bajukoko.jpg", harga: 85000 },
    { id: 2, namaProduk: "Baju Kebaya", tipe: "Baju", gender: 2, stock: 31, img: "produk/kebaya.jpg", harga: 82000 },
    { id: 3, namaProduk: "Celana Pantai", tipe: "Celana", gender: 2, stock: 23, img: "produk/celana pantai.jpg", harga: 30000 },
    { id: 4, namaProduk: "Hot Pants", tipe: "Celana", gender: 2, stock: 16, img: "produk/hotpants.jpg", harga: 38000 },
    { id: 5, namaProduk: "Batik Anjay Surabaya", tipe: "Baju", gender: 1, stock: 80, img: "produk/batik.jpg", harga: 85000 },
    { id: 6, namaProduk: "Jaket Bomber", tipe: "Jaket", gender: 0, stock: 5, img: "produk/jaketbomber.jpg", harga: 82000 },
    { id: 7, namaProduk: "Hoodie", tipe: "Jaket", gender: 0, stock: 8, img: "produk/hoodie.jpg", harga: 30000 },
    { id: 8, namaProduk: "Baju Kemeja", tipe: "Baju", gender: 1, stock: 78, img: "produk/kemeja.jpg", harga: 38000 },
    { id: 9, namaProduk: "Kimono", tipe: "Baju", gender: 1, stock: 52, img: "produk/kimono.jpg", harga: 85000 },
    { id: 10, namaProduk: "Jaket Jeje Citayem", tipe: "Jaket", gender: 2, stock: 45, img: "produk/jejecitayem.jpg", harga: 82000 },
    { id: 11, namaProduk: "Baju Pantai", tipe: "Baju", gender: 0, stock: 23, img: "produk/bajupantai.jpg", harga: 30000 },
    { id: 12, namaProduk: "Celana Jeans Mamen", tipe: "Celana", gender: 1, stock: 45, img: "produk/celanajeansmamen.jpg", harga: 38000 },
    { id: 13, namaProduk: "Celana Jeans Sis", tipe: "Celana", gender: 2, stock: 32, img: "produk/celanajeansis.jpg", harga: 85000 },
    { id: 14, namaProduk: "Kemeja Sis", tipe: "Baju", gender: 2, stock: 36, img: "produk/kemejasis.jpg", harga: 82000 },
    { id: 15, namaProduk: "Daster Bunda", tipe: "Baju", gender: 2, stock: 39, img: "produk/DasterBunda.jpg", harga: 30000 },
    { id: 16, namaProduk: "Piyama Bakekok", tipe: "Baju", gender: 2, stock: 12, img: "produk/piyama.jpg", harga: 38000 },
    { id: 17, namaProduk: "Baju Adimas", tipe: "Baju", gender: 0, stock: 45, img: "produk/adimas.jpg", harga: 85000 },
    { id: 18, namaProduk: "Rok Mimi", tipe: "Celana", gender: 2, stock: 78, img: "produk/rok mimi.jpg", harga: 82000 },
    { id: 19, namaProduk: "Celana Cut Slay", tipe: "Celana", gender: 2, stock: 56, img: "produk/cutslay.jpg", harga: 30000 },
    { id: 20, namaProduk: "Celana Korporat65", tipe: "Celana", gender: 1, stock: 21, img: "produk/celanakorporat.jpg", harga: 38000 }
]

// console.log(daftarProduk)

// let cards = document.getElementById("cards")
// console.log(cards)
// cards.innerHTML = ''

// let card = document.createElement("div")
// card.classList.add("card")
// // card.innerHTML = ''
// console.log(card)

// let card2 = document.createElement("div")
// card2.classList.add("card")
// // card.innerHTML = ''
// console.log(card2)

// // let card = document.createElement("div")
// // card.classList.add("card")

// let img = document.createElement('img')
// img.src = daftarProduk[0].img
// img.width = "220"
// img.height = "150"
// img.style.objectFit = "cover"
// card.appendChild(img)

// bikin nama produk
// let nama = document.createElement('p')
// nama.innerHTML = `<b>${daftarProduk.namaProduk}</b>`
// card.appendChild(nama)

// cards.appendChild(card)
// cards.appendChild(card2)


const checkboxPria = document.getElementById('cekBajuPria');
const checkboxWanita = document.getElementById('cekBajuWanita');
const searchButton = document.getElementById("searchButton");
const searchText = document.getElementById("text-search");

ambilProduk(daftarProduk);

// ----------------- EVENT LISTENER ---------------------------------------
checkboxPria.addEventListener('change', (event) => {
    if (event.target.checked) {
        filter('Baju Pria')
    } else {
        ambilProduk(daftarProduk)
    }
});

checkboxWanita.addEventListener('change', (event) => {
    if (event.target.checked) {
        filter('Baju Wanita') // KAYAKNYA CHECKBOX NYA MESTI DI GANTI
    } else {
        ambilProduk(daftarProduk)
    }
});

searchButton.addEventListener("click", function () {
    console.log("Button clicked!");
    if (searchText.value !== '') {
        searchProduct(searchText.value)
        searchText.value = ''
    } else {
        alert('Mau Cari Apaan Ngab ? Isi Dulu Kali');
        ambilProduk(daftarProduk)
    }
});
// ----------------- END OF EVENT LISTENER ---------------------------------



function clearData() {
    const parentCards = document.getElementById('cards');
    parentCards.innerHTML = '';
}

function ambilProduk(daftarProduk) {
    clearData()
    for (produk of daftarProduk) {
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
        nama.innerHTML = `<b>${produk.namaProduk}</b>`
        card.appendChild(nama)

        // memasukkan harga produk
        let harga = document.createElement('span')
        harga.classList.add('harga-barang') // !! Butuh class baru
        harga.innerHTML = `<b>${produk.harga}</b>`
        card.appendChild(harga)

        // bikin hot item
        let stok = document.createElement('span')
        stok.classList.add('stok-barang') // 

        cards.appendChild(card)
    }
}

function filter(data) {
    clearData()
    for (produk of daftarProduk) {
        if (data == '' || !data) {
            ambilProduk(daftarProduk)
        }
        else if (data == 'Baju Pria') {
            if (produk.tipe === 'Baju' && produk.gender == 1) {
                console.log(produk.tipe)
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
                nama.innerHTML = `<b>${produk.namaProduk}</b>`
                card.appendChild(nama)

                // memasukkan harga produk
                let harga = document.createElement('span')
                harga.classList.add('harga-barang') // !! Butuh class baru
                harga.innerHTML = `<b>${produk.harga}</b>`
                card.appendChild(harga)

                // bikin hot item
                let stok = document.createElement('span')
                stok.classList.add('stok-barang') // 

                cards.appendChild(card)
            }
        }
        else if (data == 'Baju Wanita') {
            if (produk.tipe === 'Baju' && produk.gender == 2) {
                console.log(produk.tipe)
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
                nama.innerHTML = `<b>${produk.namaProduk}</b>`
                card.appendChild(nama)

                // memasukkan harga produk
                let harga = document.createElement('span')
                harga.classList.add('harga-barang') // !! Butuh class baru
                harga.innerHTML = `<b>${produk.harga}</b>`
                card.appendChild(harga)

                // bikin hot item
                let stok = document.createElement('span')
                stok.classList.add('stok-barang') // 

                cards.appendChild(card)
            }
        }
    }

}


function searchProduct(searchTerm) {
    const filteredProducts = daftarProduk.filter((produk) => {
        return produk.namaProduk.toLowerCase().includes(searchTerm.toLowerCase());
    });
    clearData()
    for (produk of filteredProducts) {
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
        nama.innerHTML = `<b>${produk.namaProduk}</b>`
        card.appendChild(nama)

        // memasukkan harga produk
        let harga = document.createElement('span')
        harga.classList.add('harga-barang') // !! Butuh class baru
        harga.innerHTML = `<b>${produk.harga}</b>`
        card.appendChild(harga)

        // bikin hot item
        let stok = document.createElement('span')
        stok.classList.add('stok-barang') // 

        cards.appendChild(card)
    }
}
