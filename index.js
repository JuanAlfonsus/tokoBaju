const daftarProduk = [
    {id: 1, namaProduk: "Baju Koko", tipe: "Baju", laki: true, perempuan: false, stock: 3, img: "produk/apel.jpg", harga: 85000},
    {id: 2, namaProduk: "Baju Kebaya", tipe: "Baju", laki: false, perempuan: true, stock: 3, img: "produk/botol-kaca.jpg", harga: 82000},
    {id: 3, namaProduk: "Celana Pantai", tipe: "Celana", laki: true, perempuan: false, stock: 3, img: "produk/carrot.png", harga: 30000},
    {id: 4, namaProduk: "Celana Katun", tipe: "Celana", laki: false, perempuan: true, stock: 3, img: "produk/fragile.jpg", harga: 38000},
]

console.log(daftarProduk)

let cards = document.getElementById("cards")
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

for(produk of daftarProduk){
    let card = document.createElement("div")
    card.classList.add("card")

    let img = document.createElement('img')
    img.src = produk.img
    img.width = "220"
    img.height = "150"
    // img.style.objectFit = "cover"
    card.appendChild(img)

    // bikin nama produk
    let nama = document.createElement('span')
    nama.classList.add('nama-barang')
    nama.innerHTML = `<b>${produk.namaProduk}</b>`
    card.appendChild(nama)

    cards.appendChild(card)
}

