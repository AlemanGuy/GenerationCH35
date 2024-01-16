package loops;

public class ForLoops {

	public static void main(String[] args) {
		/*El ciclo For, nos proporciona una forma compaccta de iterar sobre valores.
		 * for(iniciializaccion; condicion; contador;)
		 * 
		 * (incremento/decremento){
		 * bloque e codigo
		 * }
		 * */
		
		//for con variable local
		for (int numero = 0 ; numero <= 10 ; numero++) {
			System.out.println("Numero es igual a " + numero);
		}
		
		//for con variable global}
		int contador;
		for(contador =1; contador <=5; contador++) {
			System.out.println("La cuenta es " + contador);
		}
		
		//Bucleas anidados- Bucle dentro de otro bucle.
		//imprimir un traingulo con asteriscos *
		
		int filas = 5;
		for (int i = 0; i < filas; i++) {
			//bloque de codigo que iterara con el bucle
			for (int j = 0; j <= i; j++) {
				System.out.print("*");
			}
			System.out.println();
		}
		
	}//metodo

}//clase
