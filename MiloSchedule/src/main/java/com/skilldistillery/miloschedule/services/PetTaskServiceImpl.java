package com.skilldistillery.miloschedule.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.miloschedule.entities.PetTask;
import com.skilldistillery.miloschedule.repositories.PetTaskRepository;

@Service
public class PetTaskServiceImpl implements PetTaskService {
	@Autowired
	private PetTaskRepository scheduleRepo;

	@Override
	public List<PetTask> listAllSchedules() {

		return scheduleRepo.findAll();
	}

	@Override
	public PetTask getSchedule(int scheduleId) {
		if (!scheduleRepo.existsById(scheduleId)) {
			return null;

		}
		return scheduleRepo.findById(scheduleId);
	}

	@Override
	public PetTask create(PetTask petTask) {
		petTask.setTaskType(petTask.getTaskType());
		return scheduleRepo.saveAndFlush(petTask);
	}

	@Override
	public PetTask update(int scheduleId, PetTask newSchedule) {
		PetTask updatedPetTask = null;
		PetTask existingTask = scheduleRepo.findById(scheduleId);
		if (!(existingTask == null)) {
			updatedPetTask = existingTask;
			updatedPetTask.setName(newSchedule.getName());
			updatedPetTask.setDescription(newSchedule.getDescription());
			updatedPetTask.setFrequency(newSchedule.getFrequency());
			scheduleRepo.saveAndFlush(updatedPetTask);

			return updatedPetTask;
		}
		return null;

	}

	@Override
	public boolean delete(int scheduleId) {
		if (scheduleRepo.existsById(scheduleId)) {
			scheduleRepo.deleteById(scheduleId);
			return true;
		}
		return false;
	}

}
