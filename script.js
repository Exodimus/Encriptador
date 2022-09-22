//Constantes
const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

//Si el usuario ingresa mayúsculas
inputTexto.toLowerCase();

//Encriptar
function encriptar(textoEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    textoEncriptar = textoEncriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(textoEncriptar.includes(matrizCodigo[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return textoEncriptar
}

function btnEncriptar(){
    const texto = encriptar(inputTexto.value)
    mensaje.value = texto 
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

//Desencriptar
function desencriptar(textoDesencriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    textoDesencriptar = textoDesencriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(textoDesencriptar.includes(matrizCodigo[i][1])){
            textoDesencriptar = textoDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return textoDesencriptar
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""
}

//Copiar
function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
}
