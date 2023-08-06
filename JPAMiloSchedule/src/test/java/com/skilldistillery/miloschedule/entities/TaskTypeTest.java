package com.skilldistillery.miloschedule.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TaskTypeTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private TaskType type;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAMiloSchedule");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		type = em.find(TaskType.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		type = null;
	}

	@Test
	void test() {
		assertNotNull(type);
		assertEquals("Meal", type.getName());
	}

}
