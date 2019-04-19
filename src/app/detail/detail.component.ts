import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeopleService} from '../services/people.service';
import {PeopleModel} from '../model/people.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  peopleDetail: PeopleModel;
  speciesDetails = [];
  constructor(private route: ActivatedRoute,
              private peopleService: PeopleService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);
      this.peopleService.getPeopleDetails(id).subscribe((peopleData) => {
        this.peopleService.getSpeciesDetails(peopleData.films).subscribe((result) => {
          // console.log(result);
          this.peopleDetail = peopleData;
          this.peopleDetail.filmsList = result.map((film) => film.title);
        });
      });
    });
  }

}
