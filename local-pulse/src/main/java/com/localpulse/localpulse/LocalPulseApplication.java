package com.localpulse.localpulse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.localpulse.localpulse"})
public class LocalPulseApplication {

	public static void main(String[] args) {
		SpringApplication.run(LocalPulseApplication.class, args);
	}

}
