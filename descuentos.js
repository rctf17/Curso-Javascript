function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento= 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100 ;
    return precioConDescuento;
}
function OnClickButtonPriceDiscount(){

    const inputPrice= parseInt(document.getElementById("InputPrice").value);
    const inputDiscount= parseInt(document.getElementById("InputDiscount").value);
    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);
    const resultp =document.getElementById("ResultP");
    resultp.innerText = "El precio con descuento son: $" + precioConDescuento;
    
}

function OnClickButtonPriceCoupon(){
    const inputPrice= parseInt(document.getElementById("InputPrice").value);
    const inputDiscount= parseInt(document.getElementById("InputDiscount").value);
    const inputCoupon= document.getElementById("InputCoupon").value;

    const coupons =[
        {
            name: "Cupon15",
            disconunt: 15
        },
        {
            name: "Cupon10",
            disconunt: 10,
        },
        {
            name: "Cupon20",
            disconunt: 20,
        }
    ];


    const isCouponValueValid = function (coupon){
        return coupon.name === inputCoupon ;
    }

   
    const userCoupon = coupons.find(isCouponValueValid);
    
    if(!userCoupon || userCoupon ==""){
        alert ("El cupón " + inputCoupon + "  no es válido.")
    }else{
        const couponDiscont = userCoupon.disconunt;
        const disconuntCouponPrice= calcularPrecioConDescuento(inputPrice, couponDiscont);
        const resultCoupon =document.getElementById("ResultCoupon");
        resultCoupon.innerText = "El precio con descuento es: $" + disconuntCouponPrice;
    }


}


//console.log({precioOriginal, descuento, porcentajePrecioConDescuento,precioConDescuento,});
