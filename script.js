var file = document.getElementById("file");
var enviar = document.getElementById("enviar");
enviar.addEventListener("click", function () { file.click(); })

const formu = document.querySelectorAll(".formu");
const adicionar = document.querySelector("#adicionar");
const image = document.querySelector("#compras");

adicionar.addEventListener("clik", (Event) => {
    Event.preventDefault()

    const newProduc = {
        nome: document.getElementById("nproduct").value,
        preço: document.getElementById("pproduct").value,
        descripcion: document.getElementById("subject").value,
        imgProducto: document.getElementById("file").value
    }
    localStorage.setItem("newproduct", JSON.stringify(product))

    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
    products.push(newproduct)
    localStorage.setItem("products", JSON.stringify(products))

    formu.reset()

})

cwindow.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {

        while (this.files && this.files[0]) {
            var reader = new FileReader()
            reader.addEventListener('load', (event) => {
                let image = document.querySelector('#compras')
                image.src = event.target.result;
            })
            reader.readAsDataURL(this.files[0])
        }
    })
})