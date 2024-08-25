//HARVIN MANFREDY LAINEZ SALVADOR U20240630
let camisetas = 120;
let pantalones = 77;
let zapatos = 75;
let TotalProductos;

TotalProductos = (camisetas + pantalones + zapatos);

console.log(`Camisetas: ${camisetas}. Pantalones ${pantalones}. Zapatos ${zapatos}. Total de productos: ${TotalProductos}`);


///Inventario general
if(camisetas >=100 && pantalones >=100 && zapatos >=100){
    console.log("No es necesario reponer ningún producto");
}
///Camisetas
if(camisetas <100){
    console.log("Es necesario reponer camisetas");
}
///Pantalones
if(pantalones <100){
    console.log("Es necesario reponer pantalones");
}
///Zapatos
if(pantalones <100){
    console.log("Es necesario reponer zapatos");
}