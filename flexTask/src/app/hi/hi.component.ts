import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss']
})
export class HiComponent implements OnInit {
name:string="Header";
  constructor() { }

  ngOnInit(): void {
  }

}
