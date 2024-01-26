package org.generation.employee.manager;

public class ManagerMain {
	public static void main(String[] args) {
		Manager Fernanda = new Manager ("Fernanada Ramos", 136, 46365.20d, "Manager", 2);
		System.out.println(Fernanda);
		Double salarioFer = Fernanda.getSalarioBase();
		Fernanda.getPuesto(("El salario base de " + Fernanda.getNombreCompleto() " es de$" + " pero posee un antiguedad de " + Fernanda.getAntiguedad() + " años, por lo tanto su salario incrementa a " + Fernanda.getSalario());
		
	}
}
