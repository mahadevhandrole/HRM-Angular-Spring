package org.vs.HRMProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
//@EnableJpaAuditing
public class HrmProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(HrmProjectApplication.class, args);
	}

}
