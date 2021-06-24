import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { TokenService } from '../service/token.service';
import { CuentaService } from '../service/cuenta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public isLogged = false;
  errMsj: string = '';

  constructor(private tokenService: TokenService, private cuentaService: CuentaService,
    private toastService: ToastrService){}
  ngOnInit(): void {
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
    this.loadMuseo();
  }
  loadMuseo(){
    if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()){
      this.cuentaService.getMuseo(this.tokenService.getUserName())
      .subscribe((museo) => {
        this.tokenService.setIdMuseo(+museo.idMuseo);
        // alert(this.tokenService.getIdMuseo());
      }, (error) => {
        this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000,  positionClass: 'toast-top-center',
            });
            /*
            setTimeout(() => {
              window.location.href = '/admin';
            },2000);*/
      });
    }
  }

}
