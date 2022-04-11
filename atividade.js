function enviar() {
    var nome = document.getElementById('nome').value;
    var ra = document.getElementById('ra').value;
    var num1 = document.getElementById('prinum').value;
    var num2 = document.getElementById('segnum').value;
    var res;
    document.write("Nome: " + nome + ", RA: " + ra + "<br><br>");
    document.write("Números informados:<br>Primeiro número: " + num1 + "<br> Segundo número: " + num2 + "<hr>");
    res = (num1 == num2);
    document.write("Igualdade: " + res + "<br>");
    res = (num1 === num2);
    document.write("Idêntico: " + res + "<br>");
    res = (num1 != num2);
    document.write("Diferente: " + res + "<br>");
    res = (num1 !== num2);
    document.write("Não idêntico: " + res + "<br>");
    res = (num1 > num2);
    document.write("Maior: " + res + "<br>");
    res = (num1 < num2);
    document.write("Menor: " + res + "<br>");
    res = (num1 >= num2);
    document.write("Maior/Igual: " + res + "<br>");
    res = (num1 <= num2);
    document.write("Menor/Igual: " + res + "<br>");
}