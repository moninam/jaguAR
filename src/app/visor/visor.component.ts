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
  isTest: boolean = true;
  errorMsg: string = '';
  // COLLAPSE AL DESPLEGAR COMPONENTE
    isCollapsed = true;
    componentDescription = '';
    rotate: boolean = false;
    resize: boolean = false;
  // ATRIBUTOS ENVIADOS A SELECTOR
    idMuseo: number;
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
    this.isModel = false;
    this.isVideo = false;
    this.isImage = false;
    this.hasComponentes = false;
  }
  ngAfterViewInit(){}
  ngOnInit(): void {
    this.getLocation();
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
            this.errorMsg = 'No se encontró ningún museo cerca de su localidad';
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
          this.hasComponentes = true;
        });
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
      this.isImage = false;
      this.isVideo = false;
      this.isModel = true;
      setTimeout(() => {
        this.setModelo(componente.Modelo!.UrlModelo);
        this.setMovement(componente.Modelo!.HasRotation, componente.Modelo!.HasResize);
        alert('Modelo cargado');
        this.componentDescription = componente.DescripcionComponente;
      }, 5000);
    }
    if (componente.Multimedia != null){
      if (componente.Multimedia.TipoMultimedia == 'VIDEO'){
        // alert('Cargando video');
        console.log('Cargando video');
        this.isImage = false;
        this.isModel = false;
        this.isVideo = true;
        setTimeout(() => {
          this.setVideo();
          this.setVideoUrl(componente.Multimedia!.UrlMultimedia);
          alert('Video cargado');
          this.componentDescription = componente.DescripcionComponente;
        }, 5000);
      } else if(componente.Multimedia.TipoMultimedia == 'IMAGEN'){
        // alert('Cargando imagen');
        console.log('Cargando imagen');
        this.isModel = false;
        this.isVideo = false;
        this.isImage = true;
        setTimeout(() => {
          this.setImagenUrl(componente.Multimedia!.UrlMultimedia);
          alert('Imagen cargada');
          this.componentDescription = componente.DescripcionComponente;
        }, 5000);
      }
    }
  }
  setVideo(){
    this.AFRAME.registerComponent('vidhandler', {
      init: function () {
        this.toggle = false;
        this.vid = document.querySelector('#vid');
        this.vid.pause();
    },
    update:function(){
      this.toggle = false;
      this.vid = document.querySelector('#vid');
      this.vid.play();
    },
    tick:function(){
       if(this.el.object3D.visible == true){
         if(!this.toggle){
           this.toggle = true;
           this.vid.play();
        }
      }else{
        this.toggle = false;
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
  /*
    this.AFRAME.registerComponent("foo",{
      schema : { speed : {default:1}},
      init : function(){
        this.ifMouseDown = false;
        this.x_cord = 0;
        this.y_cord = 0;
        document.addEventListener('mousedown',this.OnDocumentMouseDown.bind(this));
        document.addEventListener('mouseup',this.OnDocumentMouseUp.bind(this));
        document.addEventListener('mousemove',this.OnDocumentMouseMove.bind(this));
        window.addEventListener("wheel", (e) => {
        let scaleFactor = e.deltaY > 0 ? 0.9 : 1.1
        let scale = this.el.getAttribute("scale").clone()
        scale.multiplyScalar(scaleFactor)
        this.el.setAttribute("scale", scale)
      })
      },
      OnDocumentMouseDown : function(event:any){
        this.ifMouseDown = true;
        this.x_cord = event.clientX;
        this.y_cord = event.clientY;
      },
      OnDocumentMouseUp : function(){
        this.ifMouseDown = false;
      },
      OnDocumentMouseMove : function(event:any)
      {
        if(this.ifMouseDown)
        {
          var temp_x = event.clientX-this.x_cord;
          var temp_y = event.clientY-this.y_cord;
          if(Math.abs(temp_y)<Math.abs(temp_x))
          {
            this.el.object3D.rotateY(temp_x*this.data.speed/1000);
          }
          else
          {
            this.el.object3D.rotateX(temp_y*this.data.speed/1000);
          }
          this.x_cord = event.clientX;
          this.y_cord = event.clientY;
        }
      }
    });*/
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
    var objVid = document.getElementById('vid')
    objVid!.setAttribute('src',urlVideo);
    var obj = document.getElementById('planeVid');
    obj!.setAttribute('material','transparent:true; opacity: 0.8; src:#vid');
  }
  setImagenUrl(urlImagen:string){
    var obj = document.getElementById('transpImage');
    obj!.setAttribute('src',urlImagen);
  }
}
