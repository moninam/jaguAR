import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public isLogged = false;

  constructor(private tokenService: TokenService){}
  ngOnInit(): void {
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

}
