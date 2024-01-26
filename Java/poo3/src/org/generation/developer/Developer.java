package org.generation.developer;

import org.generation.employee.Employee;

public class Developer extends Employee {
	public String lenguajeProgramacion;
	public Developer(String nombreCompleto, int id, double salario, String puesto) {
		super(nombreCompleto, id, salario, puesto);
		
	}
	
	public String getLenguajeProgramacion() {
		return lenguajeProgramacion;
	}
	
	public void setLenguajeProgramacion(String lenguajeProgramacion) {
		this.lenguajeProgramacion = lenguajeProgramacion;
	}
	
	public void codear() {
		System.out.println("El programador " + this.getNombreCompleto() + " utiliza " + this.lenguajeProgramacion);
	}

	@Override
	public String toString() {
		return "Developer [Id=" + getId() + ", NombreCompleto=" + getNombreCompleto() + ", Puesto=" + getPuesto() + ", Salario="	+ getSalario() + ", lenguajeProgramacion=" + lenguajeProgramacion + "]";
	}




	
	
}
