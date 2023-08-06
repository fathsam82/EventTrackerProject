package com.skilldistillery.miloschedule.services;

import java.util.List;

import com.skilldistillery.miloschedule.entities.PetTask;

public interface PetTaskService {
	List<PetTask> listAllSchedules();
	PetTask getSchedule(int scheduleId);
	PetTask create(PetTask petTask);
	PetTask update(int scheduleId, PetTask newSchedule);
	boolean delete(int scheduleId);
}
