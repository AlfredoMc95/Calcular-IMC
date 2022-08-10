//indica que cuando carge por completo la pg llame esta funcion window.onload=nombreDeLaFunciion;
window.onload = function(){
    iniciar();
}

const iniciar=()=> {
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click",clickBtnCalcular);
};

const calcularPeso=(peso,altura)=>{
    let IMC = peso/Math.pow(altura,2);
    return Math.round(IMC);
}

const clickBtnCalcular=()=>{
    let txtPeso = document.getElementById("txtPeso").value;
    let txtAltura = document.getElementById("txtAltura").value;
    let txtrespuesta = document.getElementById("txtrespuesta");
    let IMC = calcularPeso(txtPeso,txtAltura);
    txtrespuesta.innerHTML=`<p>Su IMC es: ${IMC}</p>`;
};
