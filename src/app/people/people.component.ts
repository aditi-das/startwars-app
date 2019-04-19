import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../services/people.service';
import {PeopleModel} from '../model/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  peopleList: PeopleModel[];
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeopleData().subscribe((data) => {
      // console.log(data.results);
      this.peopleList = data.results.map((people) => {
        people.id = people.url.replace('https://swapi.co/api/people/', '').replace('/', '');
        return people;
      });
    });
  }

}
