package com.skilldistillery.miloschedule.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.miloschedule.entities.PetTask;

public interface PetTaskRepository extends JpaRepository<PetTask, Integer> {
	PetTask findById(int scheduleId);
}
