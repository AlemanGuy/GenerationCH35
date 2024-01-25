package org.generation.employee;

public class EmployeeMain {
	public static void main(String[]args) {
		Employee Rocio = new Employee("Rocio Hernandez", 42013, 12000, "Frontend");
		Employee Rene = new Employee("Rene Gomez", 97565, 15000, "Backend");
		Employee Diego = new Employee("Diego Gonzales", 0054, 25000, "Movil");
		
		Rocio.trabajar();
		Rene.capacitarse();
		Diego.calcularSalario();
		Rene.infoGeneral();
		
	}
}
