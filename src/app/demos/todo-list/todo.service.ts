import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "./task";
import { Store } from "./todo.store";
import { tap } from "rxjs/operators";


@Injectable() 
export class TasksService {
    
    constructor (private http: HttpClient, private store: Store) {}

    getTodoList$: Observable<Task[]> = this.http
        .get<Task[]>('http://localhost:3000/todolist')
        .pipe(
            tap(next => this.store.set('todolist', next)));

    // getToDoList() : Observable<Task[]> {
    //     return this.http
    //         .get<Task[]>('http://localhost:3000/todolist')
    // }
    
    adicionarTarefa(novaTarefa: Task){
        this.http
            .post(`http://localhost:3000/todolist/`, novaTarefa)
            .subscribe(() => {
                
                const value = this.store.value.todolist;
                
                novaTarefa.id = value.slice(-1).pop().id + 1
                novaTarefa.finalizado = false
                novaTarefa.iniciado = false

                value.push(novaTarefa);
                this.store.set('todolist', value);
            });
    }

    toggle(event: any) {
        this.http
            .put(`http://localhost:3000/todolist/${event.task.id}`, event.task)
            .subscribe(() => {

                const value = this.store.value.todolist;
                
                const todolist = value.map((task: Task) => {
                    if(event.task.is === task.id){
                        return { ...task, ...event.task}
                    } else {
                        return task;
                    }
                });


                this.store.set('todolist', todolist);
            });
    }
}