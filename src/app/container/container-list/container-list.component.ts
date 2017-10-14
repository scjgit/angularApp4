import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.css']
})
export class ContainerListComponent implements OnInit {
  myList = [{
    name: 'Sallap',
    age: 34
  }];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    /*this.apiService.get('').subscribe((c) => {
      this.myList = c;
    });*/
  }

}
