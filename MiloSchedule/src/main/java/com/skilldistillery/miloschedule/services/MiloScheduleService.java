package com.skilldistillery.miloschedule.services;

import java.util.List;

import com.skilldistillery.miloschedule.entities.Schedule;

public interface MiloScheduleService {
	List<Schedule> listAllSchedules();
	Schedule getSchedule(int parkId);
	Schedule create(Schedule schedule);
	Schedule update(int scheduleId, Schedule newSchedule);
	boolean delete(int scheduleId);
}
