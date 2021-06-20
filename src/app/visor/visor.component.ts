import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Ubicacion } from '../interfaces/ubicacion';
import { UbicacionService } from '../service/ubicacion.service';
import { VisorService } from '../service/visor.service';
import { Componente } from '../models/componente';
import { Modelo } from '../models/modelo';
import { Multimedia } from '../models/multimedia';
import { Marcador } from '../models/marcador';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  readonly AFRAME = (window as any).AFRAME;

  urlModelo:string;
  longitude:number;
  latitude:number;
  idMuseo:number;
  componente?:Componente;
  componentes:Componente[] = [];

  constructor(
              private ubicacionService: UbicacionService,
              private cookieService: CookieService,
              private visorService: VisorService){
    this.urlModelo = "../../assets/modelos/plato.glb";
    this.latitude = 0;
    this.longitude = 0;
    this.idMuseo = 0;
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
      this.idMuseo = museo.idMuseo;
    },
    (error) => {
      if (error.error instanceof ErrorEvent){
        console.log("Error Event");
      } else{
        console.log(`error status : ${error.status} ${error.statusText}`);
        switch(error.status){
          case 404:
            alert("No se encontró ningún museo cerca de su localidad");
            break;
        }
      }
    }
    )
  }

  async getComponente(id:number){
    //alert("Grupo"+id);
    this.visorService.getComponentesByGrupo(id)
    .subscribe(
      (componentes) => {
        this.componentes = [];
        componentes.forEach((value) =>{
          var c = new Componente(
                  value.nombre,
                  value.urlImagen,
                  value.descripcion,
                  value.componentType,
                  value.hasTarget,
                  value.hasDescripcion
                  );
          if (value.modelo != null){
            var m = new Modelo(
                    value.modelo.nombre,
                    value.modelo.urlModelo,
                    value.modelo.nombreAnimacion,
                    value.modelo.hasRotation,
                    value.modelo.hasMovement,
                    value.modelo.hasResize,
                    value.modelo.texturaPath
                    );
            m.IdModelo = value.modelo.idModelo;
            c.Modelo = m;
          } else if(value.multimedia != null){
            var mult = new Multimedia(
              value.multimedia.nombre,
              value.multimedia.urlUbicacion,
              value.multimedia.multimediaType
            );
            mult.IdMultimedia = value.multimedia.idMultimedia;
            c.Multimedia = mult;
          }
          if (value.target != null){
            var target = new Marcador(
              value.target.nombre,
              value.target.urlTarget
            );
            target.IdMarcador = value.target.idTarget;
            c.Target = target;
          }
          c.IdComponente = value.idComponente;
          this.componentes.push(c);
        });
      },
      (error) => {
        if (error.error instanceof ErrorEvent){
          console.log("Error Event");
        } else{
          console.log(`error status : ${error.status} ${error.statusText}`);
          switch(error.status){
            case 404:
              console.log("No se encontró ningún componente registrado");
              break;
          }
        }
      }
      );
  }
  async showComponent(componente:Componente){
    alert(componente.IdComponente);
  }
  setMovement(){
    this.AFRAME.registerComponent("component-manager",{
      init:function() {
        var element = document.querySelector('body');
        this.marker = document.querySelector('a-marker');
        var model = document.querySelector('a-entity');
      }
    });
  }
}
