import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  gutterCheck(width, height) {
    if (width > 260000 || width < 0 || height < 0 || height > 340000) {
      this.color = 'orange';
      window.confirm('You are moving out of the box');
      // rocketImage.style = disabled;
    } else {
      this.color = 'blue';
    }
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
 }

 handleLand(rocketImage){
  let result = window.confirm('Are you sure the shuttle is ready for Landing?');
  if (result) {
     this.color = 'blue';
     this.height = 0;
     this.width = 0;
     this.message = 'Shuttle is Landing.';
     rocketImage.style.bottom = '0px';
     this.takeOffEnabled = true;
  }
 }

 handleAbortMission(rocketImage){
  let result = window.confirm('Are you sure the shuttle is Aboring Mission?');
  if (result) {
     this.color = 'blue';
     this.height = 0;
     this.width = 0;
     this.message = 'Shuttle is Aborting Mission.';
     rocketImage.style.bottom = '0px';
     this.takeOffEnabled = true;
  }
 }

 moveRocket(rocketImage, direction) {
  if (direction === 'right') {
  let movement = parseInt(rocketImage.style.left) + 10 + 'px';
  rocketImage.style.left = movement;
  this.width = this.width + 10000;
  }

  else if (direction === 'left') {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width - 10000;
    }

    else if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      }

      else {
        let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height = this.height - 10000;
      }

      this.gutterCheck(this.width, this.height);
}

}
