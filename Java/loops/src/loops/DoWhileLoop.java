package loops;

public class DoWhileLoop {

	public static void main(String[] args) {
		/*
		 * Ciclo Do While, evalua la expresion en la parte inferior del ciclo.
		 * por tanto, las declaraciones dentro del blo "do" siempre se ejecutan al menos una vez.
		 */
		
		//Cuenta del 1 al 20
		int cuenta = 1;
		do {
			System.out.println("Cuenta hasta " + cuenta);
			cuenta ++;
		}while (cuenta < 0);//Output 1 ya se ejecuto al menos 1 vez 
	}

}
