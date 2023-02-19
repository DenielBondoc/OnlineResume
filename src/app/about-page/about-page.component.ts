import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../models/about-me'
import {MatDialog} from '@angular/material/dialog';
import { AboutDialogComponent } from '../dialog/about-dialog/about-dialog.component';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(AboutDialogComponent);
  }

  aboutMe: AboutMe ={
    fname: 'Jan Deniel',
    lname: 'Bondoc',
    course: 'Computer Engineering',
    job: 'Angular Developer',
    age: 22
  }

}
