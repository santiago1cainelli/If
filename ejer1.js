
function calcular1() {
    const sueldo = parseFloat(document.getElementById('sueldo').value);
    const resultado1 = document.getElementById('resultado1');

    let nsue = 0.00;

    if (sueldo < 1000) {
        nsue = sueldo + (sueldo * 0.15);
    }

    resultado1.innerHTML = nsue;
}

function calcular2() {
    const sueldo2 = parseFloat(document.getElementById('sueldo2').value);
    const resultado2 = document.getElementById('resultado2');

    let nsue2 = 0.00;

    if (sueldo2 < 1000) {
        nsue2 = sueldo2 + (sueldo2 * 0.15);
    } else {
        nsue2 = sueldo2 + (sueldo2 * 0.12);
    }

    resultado2.innerHTML = nsue2;
}

function calcular3() {
    const sueldo3 = parseFloat(document.getElementById('sueldo3').value);
    const resultado3 = document.getElementById('resultado3');
    const categoria = document.getElementById('categoria');

    let nsue3 = 0.00;

    switch (parseFloat(categoria.value)){
        case 1:
            nsue3 = sueldo3 + (sueldo3 * 0.15);
            resultado3.innerHTML = nsue3;
        break;
        case 2:
            nsue3 = sueldo3 + (sueldo3 * 0.12);
            resultado3.innerHTML = nsue3;
        break;
        case 3:
            nsue3 = sueldo3 + (sueldo3 * 0.10);
            resultado3.innerHTML = nsue3;
        break;
        case 4:
            nsue3 = sueldo3 + (sueldo3 * 0.08);
            resultado3.innerHTML = nsue3;
        break;
    }
}