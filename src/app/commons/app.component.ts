import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, mergeMap} from 'rxjs/operators';
import {isBoolean} from "util";


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
  urlChange(x): void {
    x === '/visor' ? this.visible = false : this.visible = true;
  }
}
