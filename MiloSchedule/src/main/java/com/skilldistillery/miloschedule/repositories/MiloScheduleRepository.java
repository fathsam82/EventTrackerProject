package com.skilldistillery.miloschedule.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.miloschedule.entities.Schedule;

public interface MiloScheduleRepository extends JpaRepository<Schedule, Integer> {

}
