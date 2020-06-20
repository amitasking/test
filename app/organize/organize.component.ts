import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Question} from '../question.model';
import {TestService} from '../test.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styleUrls: ['./organize.component.css']
})
export class OrganizeComponent implements OnInit {
  	
  noOfQuestion : number  = 0;
  questions : Question[] = [];

  constructor(private TestService : TestService,private router : Router) { }

  ngOnInit() {
  	
  }



  submit(form : NgForm){
    this.TestService.createTest(this.questions);
    this.router.navigate(['/take']);
  	  
  }

  numberOfQuest(input : HTMLInputElement){
      this.noOfQuestion = +input.value;
      for(let i = 0; i < this.noOfQuestion; i++){
         this.questions.push(new Question(i,null,null,null,null,null,null,null,null));
      }
  }

 

}
