package com.skilldistillery.miloschedule.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.miloschedule.entities.PetTask;

public interface PetTaskService {
	List<PetTask> listAllSchedules();

	Optional<PetTask> getSchedule(int scheduleId);

	PetTask create(PetTask petTask);

	PetTask update(int scheduleId, PetTask newSchedule);

	boolean delete(int scheduleId);
}
