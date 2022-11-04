## Nodejs Sequelize RESTAPI MySQL

Esta es una simple REST API utilizando Javascript y MySQL

- nodejs
- express
- mysql
- sequelize

## Modelado

Esta es la relacion que utilizamos para este ejercicio
![](./docs/modelsDiagram.png)

## Estructura del proyecto

```bash
.
├── package.json
├── express_config.js
├── index.js
└── database
    ├── controllers
    │   ├── categoryController.js
    │   └── productController.js
    ├── database
    │   └── database.js
    ├── models
    │   ├── categtoriesModel.js
    │   └── productsModel.js
    └── routes
        ├── categoryRoutes.js
        └── productRoutes.js

5 directories, 10 files
```
## Detalle endpoints

* GET de todos los productos

Creado para solicitar los productos disponibles sin necesidad de parametros. Ademas acepta los parametros de page y size para realizar la paginacion y realizar el pedido más rápido. La repsuesta es entregada en formato JSON.

```
router.get('/products', getProducts);
```

* GET de productos con barra de busqueda

Realizado para solicitar productos a traves de un filtro de busqueda, acepta como parametro un string que se comparara todos los productos y dara como respuesta todos los que coincidan con la busqueda. Además acepta como parametro page y size en caso el busque entregue respuestas muy extensa y así paginarla. EN caso de no ser entregado el parametro de page y size, estos poseen valores por defecto 0 y 8 respectivamente. La respuesta es entregada en formato JSON.

```
router.get('/productsBySearchBar', getProductsBySearchParams)
```

* GET de productos por categoria

Realizado para solicitar los productos por categorias, por lo tanto acepta como parámetro un dato primitivo number, desde el 1 al 7. La respuesta es entregada en formato JSON.

```
router.get('/productsByCategory', getProductsByCategory)
```