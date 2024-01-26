package poo4org.generation.figuras;

public class Circulo extends Figura{
	private double radio;

	public Circulo(double radio) {
		super();
		this.radio = radio;
	}
	
	@Override
	public double calcularArea() {
		return Math.PI * radio * radio;
	}
}