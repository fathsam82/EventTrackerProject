package com.skilldistillery.miloschedule;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Locale.Category;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.miloschedule.entities.PetTask;

@SpringBootTest
class MiloScheduleApplicationTests {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private PetTask petTask;

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
		petTask = em.find(PetTask.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		petTask = null;
	}

	@Test
	void test_basic_petTask_name() {
		assertNotNull(petTask);
		assertEquals("Breakfast", petTask.getName());

	}
	@Test
	void test_petTask_description() {
		assertNotNull(petTask);
		assertEquals("1 cup of kibble",petTask.getDescription());

	}
	@Test
	void test_petTask_frequency() {
		assertNotNull(petTask);
		assertEquals("once a day", petTask.getFrequency());
	}

}
