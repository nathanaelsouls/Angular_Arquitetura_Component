import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TasksFinalizadasComponent } from "./components/tasks-finalizadas/tasks-finalizadas.component";
import { TasksIniciadasComponent } from "./components/tasks-iniciadas/tasks-iniciadas.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { ToDoListComponent } from "./components/todo-list/todo-list.component";
import { TodoComponent } from "./todo.component";
import { TasksService } from "./todo.service";
import { Store } from "./todo.store";


@NgModule({    
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ], 
    providers: [
        TasksService,
        Store
    ],
    declarations: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        ToDoListComponent,
        TasksComponent
    ],
    exports: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        ToDoListComponent,
        TasksComponent,
        ReactiveFormsModule
    ]  
}) 
export class TodoModule{ }