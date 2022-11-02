import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project, Path } from 'paper';
import * as paper from 'paper';
import { Point, tool } from 'paper/dist/paper-core';
import { pathToFileURL } from 'url';
import { ParsedProperty } from '@angular/compiler';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail: string = 'me@my-house.com';
  myCircle!: paper.Path.Circle;


  constructor(private router: Router) { }

  ngOnInit(): void {
    window['paper'] = paper;
    this.draw()
  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form : NgForm) {
    console.log(form.value);
  }

  draw() {
    const project = new Project('canvas');  
    this.myCircle = new Path.Circle({
      center : [80,50],
      radius : 35,
      strokeColor : 'black',
      selected : false
    });
  }

  move() {

    var path = new Path({
      strokeColor: 'black'
  });

    console.log("move");
    var bottomLeft = new Point(80, 50);
    var topRight = new Point(89, 20);
    var rect = new paper.Rectangle(bottomLeft, topRight);
    console.log(rect);
    tool.onMouseDrag = function(event: paper.Segment) {
      path.add(event.point);
    }
  }
}
