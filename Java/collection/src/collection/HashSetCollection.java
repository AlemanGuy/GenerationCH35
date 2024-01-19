package collection;
import java.util.Arrays;
import java.util.HashSet;


public class HashSetCollection {

	public static void main(String[] args) {

			HashSet<String> animals = new HashSet<String>();
			
			animals.add("Perro");
			animals.add("Caballo");
			animals.add("Capibara");
			animals.add("Cebra");
			animals.add("Jirafa");
			animals.add("Ornitorrico");
			animals.add("Gato");
			animals.add("Cuervo");
			
			//Imprimir el HashSet
			System.out.println(animals);
			
			//Conocer si un elemento se encuentra dentro del set: contains();
			System.out.println(animals.contains("Capibara"));
			
			//Eliminar un elemento: remove();
			animals.remove("Cebra"); //Elimino
			System.out.println(animals);
			
			//Agregando elementos en una sola linea
			animals.addAll(Arrays.asList("Perrito", "Gatito", "Osito"));
			System.out.println(animals);
			
			/*
			 * La clase HashSet no va a garantizar que los elementos se muestren según el orden establecido ya que busca eficientar la búsqueda y recuperación de los elementos.
			 * Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario
			 */
			
			//Limpiar el HashSet: .clear();
			animals.clear();
			System.out.println(animals);

	}

}
