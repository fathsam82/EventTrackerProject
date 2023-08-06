package com.skilldistillery.miloschedule.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.miloschedule.entities.PetTask;
import com.skilldistillery.miloschedule.services.PetTaskService;

@RestController
@RequestMapping("api")
public class PetTaskController {
	@Autowired
	private PetTaskService scheduleService;
	
	
	@GetMapping("pettasks")
	List<PetTask> listOfSchedules() {
		return scheduleService.listAllSchedules();
		
	}
	@GetMapping("pettasks/{scheduleId}")
	public PetTask getSchedule(@PathVariable int scheduleId, HttpServletResponse res) {
		PetTask petTask = scheduleService.getSchedule(scheduleId);
		if(petTask == null) {
			res.setStatus(404);
		}
		return petTask;
		
	}

}
