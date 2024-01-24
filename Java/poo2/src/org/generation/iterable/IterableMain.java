package org.generation.iterable;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;


public class IterableMain {
	 public static void main (String[] args) {
		 //Podemos iterar sobre una coleccion de 3 maneras 
		 //Iteracion ciclo for each
		 List<String> nombres = new ArrayList<String>();
		 
		 nombres.addAll(Arrays.asList("Braulio", "Fernando", "Rodrigo", "Ruben", "Marco", "Rey"));
		 
		 for(String nombre : nombres) {
			 System.out.println(nombre);
		 }
		 
		 //Iteriar mediante iterator
		 List<String> apellidos = new ArrayList<String>();
		 
		 apellidos.addAll(Arrays.asList("Alemán", "Garcia", "Martinez", "Cardoso", "Razo", "Ceja"));
		 
		 Iterator<String> iterator = apellidos.iterator();
		 
		 while (iterator.hasNext()) {
			 String elemento = iterator.next();
			 System.out.println(elemento);
		 }
		
		 //Java Lambda forEach
		 
		 List<String> animales = new ArrayList <String>();
		 animales.addAll (Arrays.asList("Cuyo","Buho", "Tlacuache", "Axolote", "Vaquita Marina"));
		 animales.forEach((animal) ->{
			 System.out.println(animal);
		 });
	 }
}
