package funciones;

import java.util.ArrayList;
import java.util.List;

public class Eccomerce {
	static class Producto {
		String nombre;
		double precio;

		Producto(String nombre, double precio) {

			this.nombre = nombre;
			this.precio = precio;

		}

		static class CarritoCompra {
			List<Producto> productos = new ArrayList<>();

			void agregarProducto(Producto goku) {
				productos.add(goku);
			}

			double calcularTotal() {
				double total = 0;
				for (Producto goku : productos) {
					total += goku.precio;
				}
				return total;
			}
		} 
		
		public static void main(String[] args) {
			Producto figura = new Producto("Vegeta", 150.20);
			Producto figura2 = new Producto("Gohan", 165.10);

			CarritoCompra carrito = new CarritoCompra();

			carrito.agregarProducto(figura);
			carrito.agregarProducto(figura2);

			double totalCarrito = carrito.calcularTotal();

			System.out.println("Total del carrito: $" + totalCarrito);
		}
	}
}
