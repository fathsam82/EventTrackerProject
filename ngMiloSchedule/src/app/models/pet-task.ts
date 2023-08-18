import { TaskType } from './task-type';
export class PetTask {
  id: number;
  name: string;
  frequency: string;
  description: string;
  taskType: TaskType;

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    frequency: string = '',
    taskType: TaskType = new TaskType()

  ){
    this.id = id;
    this.name = name;
    this.description = description;
    this.frequency = frequency;
    this.taskType = taskType;
  }

}







