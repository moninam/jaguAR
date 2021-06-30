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

  urlModelo: string;
  urlTarget: string;
  urlVideo: string;
  urlImagen: string;
  longitude: number;
  latitude: number;
  componente?: Componente;
  isModel: boolean;
  isVideo: boolean;
  isImage: boolean;
  isLoading: boolean;
  isTest: boolean = true;
  secondTime:boolean = false;
  // COLLAPSE AL DESPLEGAR COMPONENTE
    isCollapsed = true;
    componentDescription = '';
    rotate: boolean = false;
    resize: boolean = false;
  // ATRIBUTOS ENVIADOS A SELECTOR
    idMuseo: number;
    nombreMuseo: string;
    hasComponentes: boolean;
    componentes: Componente[] = [];

    constructor(
              private ubicacionService: UbicacionService,
              private cookieService: CookieService,
              private visorService: VisorService){
    this.urlModelo = '../../assets/modelos/plato.glb';
    this.urlTarget = '../../assets/usr/marcadores/hiro.patt';
    this.urlVideo = '../../assets/usr/videos/prueba.mp4';
    this.urlImagen = '../../assets/usr/imagenes/example.png';
    this.latitude = 0;
    this.longitude = 0;
    this.idMuseo = 0;
    this.nombreMuseo = '';
    this.isModel = false;
    this.isVideo = false;
    this.isImage = false;
    this.hasComponentes = false;
    this.isLoading = false;
  }
  ngAfterViewInit(){}
  ngOnInit(): void {
    this.getLocation();
    this.setVideo();
  }

  async getLocation(){
    if (!navigator.geolocation){
      console.log('No es soportado por el navegador');
      alert('La geolocalización no es soportada por este navegador o dispositivo');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(
        `lat: ${position.coords.latitude}, long: ${position.coords.longitude}`
        );
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        // alert(this.latitude + ' ' +  this.longitude);
        this.getMuseo(this.latitude, this.longitude);
      });
    }
  }

  async getMuseo(latitude: number, longitud: number){
    let ubicacion = new Ubicacion(latitude, longitud);
    this.ubicacionService.getMuseo(ubicacion)
    .subscribe((museo) => {
      this.cookieService.set('idMuseo', museo.idMuseo.toString());
      this.idMuseo = museo.idMuseo;
      this.nombreMuseo = museo.nameMuseo;
      // alert(this.idMuseo + ' ' + museo.idMuseo);
    },
    (error) => {
      if (error.error instanceof ErrorEvent){
        console.log('Error Event');
      } else{
        console.log(`error status : ${error.status} ${error.statusText}`);
        switch(error.status){
          case 404:
            // alert('No se encontró ningún museo cerca de su localidad');
            console.log('No se encontró ningún museo cerca de su localidad');
            break;
        }
      }
    }
    );
  }

  async getComponente(id: number){
    // alert("Grupo"+id);
    this.visorService.getComponentesByGrupo(id)
    .subscribe(
      (componentes) => {
        this.componentes = [];
        componentes.forEach((value) => {
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
          } else if (value.multimedia != null){
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
        this.componentes.length > 0 ? this.hasComponentes = true : this.hasComponentes = false;
      },
      (error) => {
        if (error.error instanceof ErrorEvent){
          console.log('Error Event');
        } else{
          console.log(`error status : ${error.status} ${error.statusText}`);
          switch (error.status){
            case 404:
              console.log('No se encontró ningún componente registrado');
              this.hasComponentes = false;
              break;
          }
        }
      }
      );
  }
  async showComponent(componente: Componente){
    /*
    if(componente.Target != null){
      this.setMarker(componente.Target.UrlMarcador);
      alert(componente.Target.UrlMarcador);
    }*/
    if (componente.Modelo != null){
      // alert('Cargando modelo');
      console.log('Cargando modelo');
      this.isLoading = true;
      this.isImage = false;
      this.isVideo = false;
      this.isModel = true;
      setTimeout(() => {
        this.setModelo(componente.Modelo!.UrlModelo);
        this.setMovement(componente.Modelo!.HasRotation, componente.Modelo!.HasResize);
        // alert('Modelo cargado');
        console.log('modelo cargado');
        this.isLoading = false;
        this.isCollapsed = false;
        this.componentDescription = componente.DescripcionComponente;
      }, 5000);
    }
    if (componente.Multimedia != null){
      if (componente.Multimedia.TipoMultimedia == 'VIDEO'){
        // alert('Cargando video');
        console.log('Cargando video');
        this.isLoading = true;
        this.isImage = false;
        this.isModel = false;
        this.isVideo = true;
        /*
        setTimeout(() => {
          this.setVideoUrl(componente.Multimedia!.UrlMultimedia);
        },8000);*/
        setTimeout(() => {
          //this.setVideo();
          // alert('Video cargado');
          console.log('video cargado');
          this.isLoading = false;
          this.isCollapsed = false;
          this.componentDescription = componente.DescripcionComponente;
        }, 5000);
      } else if (componente.Multimedia.TipoMultimedia == 'IMAGEN'){
        // alert('Cargando imagen');
        console.log('Cargando imagen');
        this.isLoading = true;
        this.isModel = false;
        this.isVideo = false;
        this.isImage = true;
        setTimeout(() => {
          this.setImagenUrl(componente.Multimedia!.UrlMultimedia);
          // alert('Imagen cargada');
          console.log('imagen cargada');
          this.isLoading = false;
          this.isCollapsed = false;
          this.componentDescription = componente.DescripcionComponente;
        }, 5000);
      }
    }
  }
  setVideo(){
    this.AFRAME.registerComponent('vidhandler', {
      init: function () {
        this.toggle = false;
        this.vid = document.querySelector("#vid"); //reference to the video
        this.vid.pause();
      },
      tick:function(){
        this.marker = document.querySelector("a-marker");
       if(this.marker.object3D.visible == true){
         if(!this.toggle){
           this.toggle = true;
           this.vid = document.querySelector("#vid");
           this.vid.play();
         }
       }else{
         this.toggle = false;
         this.vid = document.querySelector("#vid");
         this.vid.pause();
       }
      }
    });
  }
  setMovement(rotation:boolean,resize:boolean){
    this.rotate = false;
    this.resize = false;

    if (rotation){
      this.rotate = true;
    }
    if(resize){
      this.resize = true;
    }

    const ent = document.querySelector('a-entity');
    var objectoT:any= {rotation: this.rotate, resize: this.resize};
    ent!.setAttribute('foo',objectoT);

    try{
      this.AFRAME.registerComponent('foo', {
        schema: {
          rotation: {type: 'boolean'},
          resize: {type: 'boolean'}
        },
        init:function() {
  
          var element = document.querySelector('body');
          this.marker = document.querySelector('a-marker')
          var model = document.querySelector('a-entity');
          var hammertime = new Hammer(element!);
          var pinch = new Hammer.Pinch(); // Pinch is not by default in the recognisers
          hammertime.add(pinch); // add it to the Manager instance
    
          if(rotation){
            hammertime.on('pan', (ev) => {
              let rotation:any = model!.getAttribute('rotation');
              switch(ev.direction) {
                case 2:
                  rotation.y = rotation.y + 4
                  break;
                case 4:
                  rotation.y = rotation.y - 4
                  break;
                case 8:
                  rotation.x = rotation.x + 4
                  break;
                case 16:
                  rotation.x = rotation.x - 4
                  break;
                default:
                  break;
              }
              model!.setAttribute("rotation", rotation)
            });
          }
          if (resize){
            hammertime.on("pinch", (ev) => {
              let scale:any = {x:ev.scale, y:ev.scale, z:ev.scale}
              model!.setAttribute("scale", scale);
            });
          }
         
        }
      });
    }catch(e: unknown){
      console.log("Si pasa");
      this.isLoading = false;
    }

  }
  setMarker(marcador:string){
    var marker = document.getElementById('marker');
    marker!.setAttribute('url',marcador);
  }
  setModelo(urlModelo:string){
    var objeto = document.getElementById('objeto');
    objeto?.setAttribute('gltf-model',urlModelo);
  }
  setVideoUrl(urlVideo:string){
    // Create a new asset
    var assets = document.getElementById('assetId')!;
    assets.removeChild(assets.childNodes[0]);
    var new_asset = document.createElement('video');
    new_asset.setAttribute('id', 'vid'); // Create a unique id for asset
    new_asset.setAttribute('src', urlVideo);

    // Append the new video to the a-assets, where a-assets id="assets-id"
    assets.appendChild(new_asset);
    var obj = document.getElementById('planeVid');
    obj!.setAttribute('src','#vid');
  }
  setImagenUrl(urlImagen:string){
    var obj = document.getElementById('transpImage');
    obj!.setAttribute('src',urlImagen);
  }
}
