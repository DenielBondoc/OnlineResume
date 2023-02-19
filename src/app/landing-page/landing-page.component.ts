import { Component, OnInit } from '@angular/core';
import { LandingPageContent } from '../models/landing-page-content'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  landingPageContent: LandingPageContent = {
    fname: 'Jan Deniel',
    lname: 'Bondoc',
    info: 'Computer Engineering',
    job: 'Angular Developer'
  }


}
