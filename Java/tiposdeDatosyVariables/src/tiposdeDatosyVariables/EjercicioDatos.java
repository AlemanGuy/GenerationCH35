package tiposdeDatosyVariables;

public class EjercicioDatos {

	public static void main(String[] args) {
	
		System.out.println("Hola Mundo");
		
		/*Comentarios multilinea*/
		//Comentarios de one line
		
		byte edad = 15;// Representa un Numero entero 8bits (-128 al 127)
		System.out.println("Edad del participante " + edad);
		short usuariosNuevos = 200;// Sirve para representar un numero entero 16 bits (-23768 al 32767)
		System.out.println("Usuarios nuevos" + usuariosNuevos);
		int usuariosTotales = 8752;// Sirve par representar un numero entenero 32 bits (-2147483648 al 2147483647)
		System.out.println("Usuarios Totales" + usuariosTotales);
		long usuariosPremium = 9512;//Sirve para representar un numero entero con valores mucho mayores
		System.out.println ("Usuarios Premium" + usuariosPremium);
		
		//Tipos de datos con numero decimales
		
		float altura = 1.61f;//Sirve para rerpresentar un valor numerico con numeros decimales, cuyo valor es de 23 bits y que tiene que llevar una f al final de su valor
		System.out.println ("Altura del usuario" + altura);
		double peso = 68.800;//Sirve para representar valores numericos con decimales, cuyo valor es de 64 bits y puede tener hasta quince caracteres despues del punto
		String costoBoleto ="500";//Clase para tener cadenas de texto
		String zonaBoleto ="52";
		System.out.println ("Usuario" + costoBoleto);
		System.out.println("Zona a la que pertenece" + zonaBoleto);
		
		char seccion = 'f'; //Sirve para representar valores con un solo caracter;
		System.out.println("Seccion" + seccion);
		
		boolean clienteFrecuente = true; //Sirve para obtener un true o false utilizando condicionales
		System.out.println("Es un cliente fecuente" + clienteFrecuente);
		
		//conversion de tipos
		
		//casteo a entero
		int pesoDiferente = (int) peso;
		//casteo a entero
		long pesoCambio1 = (long) peso;
		
		System.out.println("double" + peso);
		System.out.println("int" + pesoDiferente);
		System.out.println("long" + pesoCambio1);
		
		int nombreCambio = Integer.parseInt(costoBoleto);
		double zonaCambio = Double.parseDouble(zonaBoleto);
		
		System.out.println("Zona del usuario segun su boleto " + (nombreCambio * zonaCambio));
		
		/*Operadores aritmeticos 
		 * + suma
		 * - resta
		 * * multiplicacion
		 * / division
		 * % residuo
		 */
		
		/*operadores de comparacion
		 *  == Compara si un operadore es igual a otro
		 *  != Cinoara su es diferente
		 *  < mayor que
		 *  > menor que
		 *  <= mayor o igual que
		 *  >= menor o igual que
		 * */
		
		
		
		
		// programa para un cine
		
		int capacidadTotal = 500;
		double precioBoleto = 75.50;
		double precioPalomitas = 89.70;
		double precioBebida = 35.50;
		
		int personasDentro = 342;
		if (personasDentro > capacidadTotal) {
			System.out.println ("Lo siento, no hay mas espacio");
		}
		
		
		double totalEntrada = personasDentro * precioBoleto;
		double totalPalomitas = personasDentro * precioPalomitas;
		double totalBebidas = personasDentro * precioBebida;
		
		System.out.println("Total de personas " + personasDentro);
		System.out.println("Total de boletos " + totalEntrada);
		System.out.println("Total de palomitas " + totalPalomitas);
		System.out.println("Total de bebidas " + totalBebidas);
		
		
	}

}
