package fundamentals;

import java.util.Scanner;

public class EntryData {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		String name, profission;
		int age;
		double salary;
		
		System.out.print("Qual seu nome? ");
		name = sc.next();
		
		System.out.print("Qual sua idade? ");
		age = sc.nextInt();
		
		System.out.print("Qual sua renda? ");
		salary = sc.nextDouble();
		
		// Usado para ler todo o texto ate a quebra de linha
		sc.nextLine();
		System.out.print("Qual sua profiss�o ?");
		profission = sc.nextLine();
		
		sc.close();
		System.out.printf("\n%s tem %d anos de idade e um sal�rio de %.2f trabalhando como %s", name, age, salary, profission);
		
		
	}

}
