package org.generation.exceptions;
public class Division {
	
	//Metodo para dividir
	
	public static int dividir (int num1,int num2) {
		return num1/num2;
	}

	public static void main(String[]args) {
		
		/*Nos permite manejar cualquier caso excepcional en nuestro codigo, el equivalente a los errores.
		 * 
		 * Utiliza una estructura de control try-catch que permite manejar las excepciones.
		 * 
		 * -try.envuelve el codigo que puede gener<r una excepcion y lo evalua.
		 * -catch.contiene el codigo que se ejecuta cuando se lanza la excepcion.
		 * 
		 * Sintaxis
		 * 		try{
		 * codigo protegido
		 * }catch (ExceptionName e){
		 *bloque de excepcion
		 *
		 *}
		 *
		 *-finally:siempre se ejecuta, y se utiliza para mostrar un mensaje en caso de ser invocado.Podemos prescindir del finally
		 *
		 *
		 * */
		
		//Excepcion que se arroja si un numero se divide entre 0
		
		try {
			int resultado = dividir(10, 0);
			System.out.println("El resultado de la división es " + resultado);
		} catch (ArithmeticException e) {
			System.out.println("\u001B[31mError: no puedes dividir entre 0\u001B[31m");
		} finally {
			System.out.println("\u001B[32mPrograma finalizado\u001B[0m");
		}
		
	}
	
}