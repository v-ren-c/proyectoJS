//Funcion ColorBuzo
const colorBuzo = ()=>{
    let colorIngresado = prompt("Escriba color deseado y luego click en aceptar:\n Por ejemplo, podria ingresar 'rojo'");
    return colorIngresado
}

//Funcion TipoBuzo

const tipoBuzo = ()=>{
    let tipoIngresado = Number (prompt("Escriba el numero correspondiente a la opcion seleccionada y luego click en aceptar \n 1.TIPO INVIERNO (frizado, gruso)\n 2.TIPO VERANO (rustico, liviano)\n 3.TIPO LLUVIA (microfibra impermeable)\n Por ejemplo: ingrese el numero '3'y seleccione aceptar"))
    return tipoCorrecto(tipoIngresado)
}

//Revision Tipo
const tipoCorrecto = (tipoIn)=>{
    if ((tipoIn==1)||(tipoIn==2)||(tipoIn==3)){
        return tipoIn
    } else {
        do {
            tipoIn = Number (prompt("Numero ingresado INCORRECTO, escriba el numero correspondiente a la opcion seleccionada y luego click en aceptar \n 1.TIPO INVIERNO (frizado, gruso)\n 2.TIPO VERANO (rustico, liviano)\n 3.TIPO LLUVIA (microfibra impermeable)\n Por ejemplo: ingrese el numero '3'y seleccione aceptar "))
        } while ((tipoIn==1)||(tipoIn==2)||(tipoIn==3))
        return tipoIn
    }
}

//Funcion FormaBuzo

const formaBuzo= ()=>{
    let formaIngresada= Number (prompt("Escriba el numero correspondiente a la opcion seleccionada y luego click en aceptar \n 1.CAPUCHA SIN BOLSILLO \n 2.CAPUCHA CON BOLSILLO \n 3. SIMPLE (cuello redondo, sin capucha ni bolsillo) \n Por ejemplo: ingrese el numero '2'y seleccione aceptar"))
    return formaCorrecta(formaIngresada)
}

//Revision Forma
const formaCorrecta = (formaIn)=>{
    if ((formaIn==1)||(formaIn==2)||(formaIn==3)){
        return formaIn
    } else {
        do {
            formaIn = Number (prompt("Numero ingresado INCORRECTO, escriba el numero correspondiente a la opcion seleccionada y luego click en aceptar \n 1.CAPUCHA SIN BOLSILLO \n 2.CAPUCHA CON BOLSILLO \n 3. SIMPLE (cuello redondo, sin capucha ni bolsillo) \n Por ejemplo: ingrese el numero '2'y seleccione aceptar"))
        } while ((formaIn==1)||(formaIn==2)||(formaIn==3))
        return formaIn
    }
}
//Funcion TalleBuzo

const talleBuzo = ()=>{
    let talleIngresado= Number (prompt("Escriba el numero correspondiente a la opcion seleccionada y luego click en aceptar \n 1.TALLE XS \n 2.TALLE S \n 3.TALLE M \n 4.TALLE L\n 5.TALLE XL \n Por ejemplo: ingrese el numero '2'y seleccione aceptar"))
    return talleCorrecto(talleIngresado)
}

//Revision Talle

const talleCorrecto = (talleIn) =>{
    if ((talleIn==1)||(talleIn==2)||(talleIn==3)){
        return talleIn
    } else {
        do {
            talleIn = Number (prompt("Numero ingresado INCORRECTO, escriba el numero correspondiente a la opcion seleccionada y luego click en aceptar \n 1.TALLE XS \n 2.TALLE S \n 3.TALLE M \n 4.TALLE L\n 5.TALLE XL \n Por ejemplo: ingrese el numero '2'y seleccione aceptar"))
        } while ((talleIn==1)||(talleIn==2)||(talleIn==3)||(talleIn==4)||(talleIn==5))
        return talleIn
    }
}

//Funcion DetallePedido
const detallePedido = (color,tipo,forma,talle)=>{
    let confirmacion = true
    confirmacion=confirm(`Gracias por seleccionar tu pedido! Resumen:\n COLOR: ${color}\n TIPO: ${tipo} (1:invierno/2:verano/3:lluvia)\n FORMA: ${forma}(1:capucha sin bolsillo/2:capucha con bolsillo/3:simple, cuello redondo sin bolsillo)\n TALLE: ${talle}(1/XS, 2/S, 3/M. 4/L, 5XL)\n Selecciona Aceptar para finalizar o Cancelar para comenzar de nuevo`)
    if (confirmacion){
        alert("gracias por utilizar este simulador")
    } else {
        iniciando()
    }
}

//Iniciar

const iniciando= (colorF,tipoF,formaF,talleF)=>{
    let inicio=true
    inicio= confirm( "hola! bienvenidx al simulador de buzos personalizados, lo iras personalizando selecciones y respuestas en cada caso, aprieta aceptar para comenzar")
    if(inicio){
        colorBuzo(colorF)
        tipoBuzo(tipoF)
        formaBuzo(formaF)
        talleBuzo(talleF)
    } else {
        alert("hasta luego")
    }
}

//SIMULADOR
iniciando(color,tipo,forma,talle);
detallePedido(color,tipo,forma,talle);