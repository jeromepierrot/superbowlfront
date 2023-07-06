import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent implements OnInit {
  listFiller = Array.from({length: 25}, (_, i) => `List Item ${i+1}`)

  constructor() {

  }

 ngOnInit(): void {
 }
}
