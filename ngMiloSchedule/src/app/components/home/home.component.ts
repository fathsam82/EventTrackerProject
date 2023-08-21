import { Component, OnInit } from '@angular/core';
import { PetTask } from 'src/app/models/pet-task';
import { PetScheduleService } from 'src/app/services/pet-schedule.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  taskList: PetTask[] = [];
  newTask: PetTask = new PetTask();
  selected: PetTask | null = null;
  editTask: PetTask | null = null;
  showDeleteButton: boolean = false;

  constructor(private petScheduleService: PetScheduleService) {}

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.petScheduleService.index().subscribe({
      next: (list) => {
        this.taskList = list;
      },
      error: (fail) => {
        console.error('HomeComponent.reload(): error getting tasks');
        console.error(fail);
      },
    });
  }

  addTask(task: PetTask) {
    this.petScheduleService.create(task).subscribe({
      next: (createdTask) => {
        this.newTask = new PetTask();
        this.reload();
      },
      error: (fail) => {
        console.error('PetScheduleComponent.addTask: error creating todo');
        console.error(fail);
      },
    });
  }

  updateTask(task: PetTask) {
    this.petScheduleService.update(task).subscribe({
      next: (updatedTask) => {
        this.selected = updatedTask;
        this.editTask = null;
        this.reload();
      },
      error: (oops) => {
        console.error('PetScheduleComponent.updateTask: error on update');
        console.error(oops);
      },
    });
  }

  deleteTodo(taskId: number) {
    this.petScheduleService.destroy(taskId).subscribe({
      next: () => {
        this.selected = null;
        this.reload();
      },
      error: (nogood) => {
        console.error('PetScheduleComponent.deleteTask: error on delete');
        console.error(nogood);
      },
    });
  }

  showDetails(task: PetTask) {
    this.selected = task;
    this.editTask = { ...task };
  }
}
