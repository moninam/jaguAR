import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jaguAr';
  visible: boolean;

  constructor(private location: Location) {
      this.location.onUrlChange(x => this.urlChange(x));
      this.visible = true;
  }
  ngOnInit(): void{

  }
  urlChange(x: any): void {
    x === '/visor' ? this.visible = false : this.visible = true; // visibilidad del header y footer
  }
}
