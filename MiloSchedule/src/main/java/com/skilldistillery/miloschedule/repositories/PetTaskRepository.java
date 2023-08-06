package com.skilldistillery.miloschedule.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.miloschedule.entities.PetTask;

public interface PetTaskRepository extends JpaRepository<PetTask, Integer> {
	PetTask findById(int scheduleId);

}
