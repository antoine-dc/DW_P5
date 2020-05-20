class Shop {
  constructor() {
    // TODO
  }

  async getProductsByType(type) {
    await fetch('http://localhost:3000/api/' + type)
      .then((response) => response.json())
      .then(products =>
        products.forEach(product => {
          this.displayProduct(product, type)
        })
      )
      .catch(err => console.log(`Erreur avec le message : ${err}`));

  }

  async getProductById(id, type) {
    await fetch(`http://localhost:3000/api/${type}/${id}`)
      .then((response) => response.json())
      .then(product =>
        this.displayPageProduct(product, type)
      )
      .catch(err => console.log(`Erreur avec le message : ${err}`));

  }

  async displayProduct(product, type) {
    $("#container_products .row").append(
      `
        <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <img src="${product.imageUrl}">
                
                <a class="btn-floating halfway-fab waves-effect waves-light red seeMore" onclick="location.href='./views/product.html?id=${product._id}&type=${type}'"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <span class="card-title">${product.name}</span>
                <p>${product.price}€</p>
              </div>
            </div>
          </div>
        `
    );
  }

  async displayPageProduct(product, type) {
    $('h1').html(`${type} - ${product.name}`.toUpperCase());
    $('h5').html(`<a class="waves-effect waves-light btn" href="../index.html" >Retour à l'accueil</a>`);
    $('title').html(`${type} - ${product.name}`.toUpperCase());

    let tabOptions = [];
    switch (type) {
      case 'teddies':
        tabOptions = product.colors;
        break;
      case 'cameras':
        tabOptions = product.lenses;
        break;
      case 'furniture':
        tabOptions = product.varnish;
        break;
      default:
        tabOptions = null;
    }

    $("#container_products .row").append(
      `
        <div class="col s12 m12">
            <div class="card">
              <div class="card-image">
                <img src="${product.imageUrl}">
                 </div>
              <div class="card-content">
                <span class="card-title">${product.name}</span>
                <span class="new badge" data-badge-caption="€">${product.price}</span>
                <p>${product.description}</p>
                <p>Choix: </p>
              
              </div>
              <div class="card-content">
                <label>Choix</label>
                <select>
                  <option value="" disabled selected>Choisir votre option</option>
                    ${tabOptions.map(choix => `<option value="${choix}">${choix}</option>`)}
                </select>
                <a class="waves-effect waves-light btn"><i class="material-icons right">shopping_basket</i>Add to cart</a>
              </div>
            </div>
           
          </div>
        `
    );

    $('select').formSelect(); // Pour activer les select
  }

}