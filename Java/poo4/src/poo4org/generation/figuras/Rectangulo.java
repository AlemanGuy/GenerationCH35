package poo4org.generation.figuras;

public class Rectangulo extends Figura{
	private double base;
	private double altura;
	
	public Rectangulo(double base, double altura) {
		
		this.base = base;
		this.altura = altura;
	}
	
	@Override
	public double calcularArea() {
		return base*altura;
	}
	public static void main (String[] args) {
		Rectangulo rectangulo = new Rectangulo (5, 3);
		System.out.println("El area del rectangulo es " + rectangulo.calcularArea() + " Metros cuadrados");
		
		rectangulo.infoFigura();
	}
}
