package mangosynaranajas;

//Definición de la clase MangosNaranjas
class MangosNaranjas {
private int mangos;
private int naranjas;

// Constructor que recibe el número de mangos y naranjas
public MangosNaranjas(int mangos, int naranjas) {
   this.mangos = mangos;
   this.naranjas = naranjas;
}

// Método para calcular el número de cajas y mostrar los resultados
public void imprimir() {
   // Calcular el número de mangos y naranjas por caja (división entera)
   int mangosPorCaja = mangos / obtenerNumeroCajas();
   int naranjasPorCaja = naranjas / obtenerNumeroCajas();

   // Imprimir los resultados
   System.out.println("El número de cajas es: " + obtenerNumeroCajas());
   System.out.println("El número de mangos en una caja es: " + mangosPorCaja);
   System.out.println("El número de naranjas en una caja es: " + naranjasPorCaja);
}

// Método para obtener el número máximo de cajas
private int obtenerNumeroCajas() {
   return Math.min(mangos, naranjas);
}
}
