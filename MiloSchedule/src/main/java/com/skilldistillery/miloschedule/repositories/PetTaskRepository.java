package com.skilldistillery.miloschedule.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.miloschedule.entities.PetTask;

public interface PetTaskRepository extends JpaRepository<PetTask, Integer> {
	Optional<PetTask> findById(int scheduleId);
}
