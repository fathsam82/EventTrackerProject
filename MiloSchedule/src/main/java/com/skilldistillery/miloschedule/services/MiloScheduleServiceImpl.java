package com.skilldistillery.miloschedule.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.miloschedule.entities.Schedule;
import com.skilldistillery.miloschedule.repositories.MiloScheduleRepository;

@Service
public class MiloScheduleServiceImpl implements MiloScheduleService {
	@Autowired
	private MiloScheduleRepository scheduleRepo;

	@Override
	public List<Schedule> listAllSchedules() {
		
		return scheduleRepo.findAll();
	}

	@Override
	public Schedule getSchedule(int parkId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Schedule create(Schedule schedule) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Schedule update(int scheduleId, Schedule newSchedule) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int scheduleId) {
		// TODO Auto-generated method stub
		return false;
	}

}
