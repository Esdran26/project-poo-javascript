class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }

}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a name="delete" href="#" class="btn btn-danger m-2">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }
    resetForm() {
        const productForm = document.getElementById('product-form').reset();
    }
    deleteProduct(element) {
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove()
        }
    }
    showMessage(message, style) {
        const div = document.createElement('div');
        div.className = `alert alert-${style} mt-4`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function() {
            div.remove();
        }, 1000);
    }
}

//EventListener
const form = document.getElementById('product-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value,
        price = document.getElementById('price').value,
        year = document.getElementById('year').value;
    const product = new Product(name, price, year);
    const ui = new UI();
    ui.addProduct(product);
    ui.showMessage('Porduct Added Successfully', 'success');

    e.preventDefault();
});

const deleted = document.getElementById('product-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
    console.log(e.target);
    ui.showMessage('Product Deleted Successfully', 'danger');
});
