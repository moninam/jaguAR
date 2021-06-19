import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Ubicacion } from '../interfaces/ubicacion';
import { UbicacionService } from '../service/ubicacion.service';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  urlModelo:string;
  longitude:number;
  latitude:number;

  constructor(private ubicacionService: UbicacionService,private cookieService: CookieService){
    this.urlModelo = "../../assets/modelos/plato.glb";
    this.latitude = 0;
    this.longitude = 0;
  }
  ngOnInit(): void {
    var objeto = document.getElementById('objeto');
    objeto?.setAttribute('gltf-model',this.urlModelo);
    this.cookieService.set('Prueba','Prueba');
    this.getLocation();   
  }

  getLocation():void{
    if(!navigator.geolocation){
      console.log("No es soportado por el navegador");
    } else {
      navigator.geolocation.getCurrentPosition((position) =>{
        console.log(
        `lat: ${position.coords.latitude}, long: ${position.coords.longitude}`
        );
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getMuseo(this.latitude,this.longitude);  
      });
    }
  }

  getMuseo(latitude:number, longitud:number){
    let ubicacion = new Ubicacion(latitude,longitud);
    this.ubicacionService.getMuseo(ubicacion)
    .subscribe((museo) => {
      this.cookieService.set('idMuseo',museo.idMuseo.toString());
    })
  }
}
