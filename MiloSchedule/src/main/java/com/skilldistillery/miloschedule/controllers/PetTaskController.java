package com.skilldistillery.miloschedule.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	@PostMapping("pettasks")
	public PetTask createTask(@RequestBody PetTask petTask, HttpServletResponse res, HttpServletRequest req) {
		petTask = scheduleService.create(petTask);
		if(petTask == null) {
			res.setStatus(404);
		}
		else {
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			res.setHeader("Location", url.append("/").append(petTask.getId()).toString());
		}
	
	return petTask;
	}
	@PutMapping("pettasks/{taskId}")
	public PetTask updateTask(@PathVariable Integer taskId, @RequestBody PetTask petTask, HttpServletResponse res) {
		try {
			petTask = scheduleService.create(petTask);
			if (petTask == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return petTask;
	}
	@DeleteMapping("pettasks/{taskId}")
	public void deletePost(@PathVariable Integer taskId, HttpServletResponse res) {
		if (scheduleService.delete(taskId)) {
			
			res.setStatus(204);
		}
		else {
			
			res.setStatus(404);
		}
	}

}
