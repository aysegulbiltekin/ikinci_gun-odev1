const list = document.querySelector('.product-list-products')

function ekle(value) {
    // 1.kısım
    let product1 = document.querySelector('#input').value
    let product2 = document.querySelector('#input2').value

    list.innerHTML += `<div class="item">${product1}</div>
                       <div class="item">${product2}</div>
                       <div style="color: green;">
                        Ürünler eklendi
                       </div>`
    document.querySelector('#input').value = ''
    document.querySelector('#input2').value = ''

    // ------
    // 2. kısım
    // productList = ['araba', 'ev', 'çeyiz', 'çiçek']

    // for (i in productList) {
    //     list.innerHTML += `<div class="item">${productList[i]}</div>`
    // }
}
