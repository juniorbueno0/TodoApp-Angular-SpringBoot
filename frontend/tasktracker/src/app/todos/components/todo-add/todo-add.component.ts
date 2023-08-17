import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TodoService } from '../../services/activity.services';
import { ActivatedRoute } from '@angular/router';
import 'toastr';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit{
  inputForm: FormGroup;
  title: string = 'Create New Todo';
  buttonTitle: string = 'Create';
  id:string | null;

  constructor(
    private todoService:TodoService, 
    private formbuilder:FormBuilder,
    private aRouter: ActivatedRoute
    ){

    this.inputForm = this.formbuilder.group({
      id:[null, Validators.required],
      title:['', Validators.required],
      description:['', Validators.required],
      completed:[0, Validators.required]
    })

    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.update();
  }

  onSubmitForm(): void{

    if(this.id !== null){
      // update todo

      const newtodo = {
        id:Number(this.id),
        title:this.inputForm.value.title,  
        description:this.inputForm.value.description, 
        completed:false
      }

      this.todoService.updateTodoById(newtodo, this.id).subscribe(data => {
        console.log(data);
        this.inputForm.reset();
      })

    }else{
      if(this.inputForm.value.title !== '' && this.inputForm.value.description !== '' && 
      this.inputForm.value.description.length > 0){
        //add new todo

        const newtodo = {
          id:0,
          title:this.inputForm.value.title,  
          description:this.inputForm.value.description, 
          completed:false
        }
        
        this.todoService.createTodo(newtodo).subscribe(data => {
          console.log(data);
        });
        this.inputForm.reset();
      } 
    }


  }

  update(){
    if(this.id !== null){
      this.title = 'Edit Todo';
      this.buttonTitle = 'Edit';
      this.todoService.getTodo(this.id).subscribe(data => {
        this.inputForm.controls['title'].setValue(data.title);
        this.inputForm.controls['description'].setValue(data.description);
      });
    }
  }

}
