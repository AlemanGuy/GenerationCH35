package collection;
import java.util.ArrayList;
import java.util.Collections;
public class SortMethos {

	public static void main(String[] args) {
		//El metdo .sort() permite ordenar los elementos de un ArrayList
		
		ArrayList<Integer> points = new ArrayList <Integer>();
		ArrayList<String> names = new ArrayList <String>();
		
		points.add(8);
		points.add(5);
		points.add(10);
		points.add(6);
		points.add(4);
		points.add(9);
		points.add(7);
		
		System.out.println(points);
		
		Collections.sort(points);
		System.out.println(points);
		
		names.add("arturo");
		names.add("Eli");
		names.add("Marco");
		names.add("anna");
		names.add("Jonathan");
		
		System.out.println(names);
		
		Collections.sort(names);
		System.out.println(names);
		
	}
}
