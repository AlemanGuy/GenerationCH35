package org.generation.encapsulation;

public class EmployeeMain {

	public static void main(String[] args) {
		//Instanciar los objetos
		Employee Daniel = new Employee (" Daniel ", " Maldonado ", 7836 , 8596.33d , " Instructor " );
		Employee Arturo = new Employee (" Arturo ", " Avila ", 4403 , 19754.20d , " Desarrollador Backend " );
		Employee Abigail = new Employee (" Abigail ", " Martinez ", 5274 , 17999.62d , " Desarrollador Frontend " );
		
		System.out.println(Daniel);
		System.out.println(Arturo);
		System.out.println(Abigail);
		
		Daniel.infoGeneral();
		Arturo.calcularSalario();
		Abigail.capacitarse();
		
		System.out.println(Daniel.getNombre() + " " + Daniel.getApellido() + " Ocupa el puesto de: " + Daniel.getPuesto());
		
		System.out.println(Abigail.getPuesto() + " Gana $" + Abigail.getSalario() + " pesos");
		
		Arturo.setSalario(024598.11);
		Arturo.calcularSalario();
	}

}
