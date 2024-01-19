package collection;

import java.util.Arrays;
import java.util.ArrayList;

public class ArrayListCollections {

	public static void main(String[] args) {
		//Arrays
		String [] names = {"Jonathan", "Anna", "Eli",  "Arturo", "Marco", "Rubén"};
		System.out.println(Arrays.toString(names));
		
		int[] edades = {23, 22, 28, 25, 25, 28};
		System.out.println(Arrays.toString(edades));
		
		//Acceder a cada elemento Array
		String name1 = names[0];
		System.out.println("El primer nombre es: " + name1);
		int edad1 = edades[2];
		System.out.println("La edad de " + name1 + " es de " + edad1 + " años");
		
		//Obtener la longitud del array
		int longitudNames = names.length;
		System.out.println("El array names tiene: " + longitudNames + " elementos ");
		
		//Obtener el ultimo elemento
		//String ultimoElemento = names[longitudNames - 1];
		String ultimoElemento = names[names.length - 1];
		System.out.println("El ultimo elemento del array names es: " + ultimoElemento);
		
		//Mostrr cada elemento en un forEach
		for(String name : names) {
			System.out.println(name);
		}
		//Array List
		ArrayList<String> films = new ArrayList <String>();
		ArrayList<Integer> matricula = new ArrayList <>();
		ArrayList<Character> Characters = new ArrayList <>();
		//Agregar elementos
		films.add("Die Hard");
		films.add("Pulp Fiction");
		films.add("Nobody");
		films.add("John wick");
		System.out.println(films);
		
		//Obtener un elemento name.get(index)
		String film1 = films.get(0);
		System.out.println("La primera pelicula es " + film1);
		
		//Modificar un elmento: name.set (index, newValue);}
		String film3 = films.set(3, "Memento");
		String film3Get = films.get(3);
		System.out.println(film3Get);
		
		//Conocer el tamaño del ArrayList: name.size();
		int sizeFilms = films.size();
		System.out.println("El tamaño del ArrayList films es de: " + sizeFilms + " elemenos");
		
		films.add("The fountain");
		System.out.println(films);
		
		films.remove(4);
		System.out.println(films);
		
		System.out.println("****Nuevo Listado****");
		for (String film : films) {
			System.out.println(film);
		}
		matricula.add(2525);
		Characters.add('A');
		
		System.out.println(matricula);
		System.out.println(Characters);
	}

}
