package letras;

public class LetrasMain {

	public static void main(String[] args) {
		Letras letras = new Letras();
		letras.mostrarMensaje("Escribe un texto y te mostrare el número de vocales, consonantes, símbolos y números");
		String palabra = letras.leerEntrada();
		
		Contador contador = new Contador();
		int totalVocales = contador.contarVocales(palabra);
		System.out.println("Hay " + totalVocales + " vocales");
		
		int totalNumeros = contador.contarNumeros(palabra);
		System.out.println("Hay " + totalNumeros + " numeros");
		
		int totalConsonantes = contador.contarConsonantes(palabra);
		System.out.println("Hay " + totalConsonantes + " consonantes");
		
		int totalSimbolos = contador.contarSimbolos(palabra);
		System.out.println("Hay " + totalSimbolos + " simbolos");

	}

}
