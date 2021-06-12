import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jaguAr';
  private router = '';
  private header;
  private footer;
  constructor(private location: Location){ this.router = this.location.path();
      this.header = document.getElementById('app-navbar');
      this.footer = document.getElementById('app-footer');}
  ngOnInit(): void {

  }
  shouldShow(){ return !(this.router === '/visor'); }
}
