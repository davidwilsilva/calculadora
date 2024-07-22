let res = document.getElementById('res')

function inCalc(num){
    res.innerHTML += num
}

function limpar(){
    res.innerHTML = ''
}
function deletar(){
    if( res.innerHTML.length > 0){
        res.innerHTML = res.innerHTML.slice(0, -1)
    }
}

function calcular() {
    res.innerHTML = eval(res.innerHTML)
}