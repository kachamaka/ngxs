import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from './../actions/tutorial.actions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http: HttpClient, private store: Store) { }

  addTutorial() {
    this.http.get("https://api.chucknorris.io/jokes/random").subscribe((data:any)=>{
      console.log(data.value);
      this.store.dispatch(new AddTutorial({name: data.value}))
    })
  }

  ngOnInit() {
  }

}
