import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-new',
  templateUrl: './footer-new.component.html',
  styleUrls: ['./footer-new.component.scss']
})
export class FooterNewComponent implements OnInit {
name:string="Footer"
  constructor() { }

  ngOnInit(): void {
  }

}
