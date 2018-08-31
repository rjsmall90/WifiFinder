package org.apache.maven.primeraGram;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.support.ClassPathXmlApplicationContext;


@SpringBootApplication
@ImportResource("spring-mongo.xml")
public class PrimeraGramApplication  {

	public static void main(String[] args) {
		SpringApplication.run(PrimeraGramApplication.class, args);

		ApplicationContext context = new ClassPathXmlApplicationContext("spring-mongo.xml");

	}



}
