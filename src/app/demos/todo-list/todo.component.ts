import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Task } from "./task";
import { TasksService } from "./todo.service";
import { Store } from "./todo.store";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {    

    tarefaGroup: FormGroup;
    novaTask: Task;    

    constructor(private fb: FormBuilder, private taskService: TasksService){ }

    ngOnInit() {
        this.tarefaGroup = this.fb.group({
            nome: ['']
        })
    }    

    adicionarTarefa() {        
        if(this.tarefaGroup.dirty && this.tarefaGroup.valid) {
            this.novaTask = Object.assign({}, this.novaTask, this.tarefaGroup.value);

            this.taskService.adicionarTarefa(this.novaTask);
            this.tarefaGroup.reset();
        }
    }

    
}