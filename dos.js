
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const figura = document.getElementById("figura").value;
    const lado = parseFloat(document.querySelector('input[name="lado"]').value);
    const Altura = parseFloat(document.querySelector('input[name="altura"]').value);
    const Base = parseFloat(document.querySelector('input[name="base"]').value);
    const Radio = parseFloat(document.querySelector('input[name="radio"]').value);
    const Dma = parseFloat(document.querySelector('input[name="dM"]').value);
    const Dme = parseFloat(document.querySelector('input[name="dm"]').value);
    const DM = parseFloat(document.querySelector('input[name="BM"]').value);
    const Dm = parseFloat(document.querySelector('input[name="bm"]').value);
    const Al = parseFloat(document.querySelector('input[name="htrapecio"]').value);

    let Imagen = "";
    let Area = 0;
    let Perimetro = 0;

    const resultado = document.querySelector(".res");

    function pitagoras(a, b) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }

    switch (figura) {
        case 'cuadrado':
            Area = lado * lado;
            Imagen = "https://www.pictoeduca.com/config/timthumb-alt.php?src=https://www.pictoeduca.com/uploads/2020/05/619d3d25e9851_unidades.png&w=847";
            break;
        case 'rectangulo':
            if (Base !== Altura) {
                Area = Base * Altura;
                Imagen = "https://timvandevall.com/wp-content/uploads/jeopardy-game-question-template.png";
            } else {
                Area = "Error";
            }
            break;
        case 'circulo':
            Area = Math.PI * (Radio * Radio);
            Imagen = "https://cloud.educaplay.com/recursos/448/14343819/image6417286e99aa5.png";
            break;
        case 'triangulo':
            Area = (Math.sqrt(3) / 4) * (lado * lado);
            Imagen = "https://imagepng.org/wp-content/uploads/2018/10/triangulo-equilatero-4-1.png";
            break;
        case 'pentagono':
            Area = (5 * Math.pow(lado, 2)) / (4 * Math.tan(Math.PI / 5));
            Imagen = "https://decagono.com/img/pentagono.png";
            break;
        case 'hexagono':
            Area = ((3 * Math.sqrt(3)) / 2) * (lado * lado);
            Imagen = "https://www.decagono.com/img/hexagono.png";
            break;
        case 'rombo':
            if (Dma <= Dme) {
                Area = "Error";
            } else {
                Area = (Dma * Dme) / 2;
                Imagen = "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49285/small-blue-diamond-emoji-clipart-md.png";
            }
            break;
        case 'trapecio':
            if (DM <= Dm) {
                Area = "Error";
            } else {
                Area = ((DM + Dm) * Al) / 2;
                Imagen = "https://conceptoabc.com/wp-content/uploads/2022/05/Trapecio.jpg";
            }
            break;
    }

    switch (figura) {
        case 'cuadrado':
            Perimetro = 4 * lado;
            break;
        case 'rectangulo':
            if (Base !== Altura) {
                Perimetro = 2 * (Base + Altura);
            } else {
                Perimetro = "Error";
            }
            break;
        case 'circulo':
            Perimetro = 2 * Math.PI * Radio;
            break;
        case 'triangulo':
            Perimetro = lado * 3;
            break;
        case 'pentagono':
            Perimetro = 5 * lado;
            break;
        case 'hexagono':
            Perimetro = 6 * lado;
            break;
        case 'rombo':
            if (Dma <= Dme) {
                Perimetro = "Error";
            } else {
                const L = Math.sqrt(Math.pow(Dma / 2, 2) + Math.pow(Dme / 2, 2));
                Perimetro = 4 * L;
            }
            break;
        case 'trapecio':
            if (DM <= Dm) {
                Perimetro = "Error";
            } else {
                const ladoT = pitagoras((DM - Dm) / 2, Al);
                Perimetro = DM + Dm + 2 * ladoT;
            }
            break;
    }

    resultado.innerHTML = `
        <p>Área: ${Area}</p>
        <p>Perímetro: ${Perimetro}</p>
        <img src="${Imagen}" alt="${figura}" width="200">
    `;
});
