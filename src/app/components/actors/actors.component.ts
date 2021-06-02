import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  selectedIndex = -1;

  actorList = [
    { name: 'Amitabh Bachhan', city: 'Mumbai' },
    { name: 'Will Smith', city: 'Hollywood' },
    { name: 'Priyanka Chopra Jonas', city: 'Hollywod' },
    { name: 'Aishwarya Rai', city: 'New Delhi'},
    { name: 'Rajnikant', city: 'Chennai'}
  ];

  newActorName = '';
  newActorCity = '';

  myActor = {
    name: '', city: ''
  };

  constructor() {
    // this.actorList = "This is actor list";
   }

  ngOnInit(): void {
  }

  deleteActor(index: number): void {
    this.actorList.splice(index, 1);
  }

  selectActor(index: number) {
    this.selectedIndex = index;
  }

  cancelEdit() {
    this.selectedIndex = -1;
  }

  addActor() {
    if (this.newActorName === '' || this.newActorCity === '') return;
    this.actorList.push({
      name: this.newActorName,
      city: this.newActorCity
    });
    // this.newActorName = '';
    // this.newActorCity = '';

    this.newActorName = this.newActorCity = '';
  }

  addActorV2() {
    if (this.myActor.name === '' || this.myActor.city === '') return;
    this.actorList.push(this.myActor)
    this.myActor = { name: '', city: '' };
  }
}
