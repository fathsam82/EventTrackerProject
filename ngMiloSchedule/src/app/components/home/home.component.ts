import { Component, OnInit } from '@angular/core';
import { PetTask } from 'src/app/models/pet-task';
import { PetScheduleService } from 'src/app/services/pet-schedule.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  taskList: PetTask [] = [];



  constructor(
    private petScheduleService: PetScheduleService
  ) {}
  ngOnInit(): void {
    this.reload()

  }

  reload() {
    this.petScheduleService.index().subscribe ({
      next: (list) => {
        this.taskList = list;
      },
      error: (fail) => {
        console.error('HomeComponent.reload(): error getting tasks');
        console.error(fail);
      }
    });
  }

}
