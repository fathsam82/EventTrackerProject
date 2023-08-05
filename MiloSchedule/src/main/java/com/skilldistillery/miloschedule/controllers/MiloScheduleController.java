package com.skilldistillery.miloschedule.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.miloschedule.entities.Schedule;
import com.skilldistillery.miloschedule.services.MiloScheduleService;

@RestController
@RequestMapping("api")
public class MiloScheduleController {
	@Autowired
	private MiloScheduleService scheduleService;
	
	@GetMapping("schedule")
	List<Schedule> listOfSchedules() {
		return scheduleService.listAllSchedules();
		
	}

}
