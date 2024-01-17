package loops;

public class ContinueLoop {

	public static void main(String[] args) {
		
		/*
		 * Instrucciones de salto:
		 * continue-- Interrumple la iteracion del bucle, si se procede una condicion especifica y continua con la siguiente.
		 * 
		 */
		
		//Con continue,, ejecutanedo la sentencia condicional, pero cumpliendo la condicon del bucle for.
		
		for (int cliente = 1; cliente <= 20; cliente ++) {
			if (cliente == 5) {
				System.out.println("Eres el cliente número " + cliente + " ¡¡¡Felicidades Ganaste!!!");
				continue;
				
			}System.out.println("Eres el cliente número " + cliente);
		}

	}
  
}
