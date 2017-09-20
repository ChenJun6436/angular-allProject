package com.xdbigdata.subsidize_zjut;

import org.activiti.spring.boot.SecurityAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableAutoConfiguration(exclude={SecurityAutoConfiguration.class})
@EnableScheduling
@EnableAsync
public class SubsidizeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SubsidizeApplication.class, args);
	}
}
