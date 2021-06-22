import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Componente } from 'src/app/models/componente';
import { GrupoModelo} from 'src/app/models/grupo';
import { VisorService } from 'src/app/service/visor.service';
/*import { Grupo } from '../../class/grupo';
import { GrupoModelo } from '../../class/grupo-modelo';
import { PruebaComponent } from '../prueba/prueba.component';
import { GrupoServicioService } from '../../services/grupo-servicio.service';
import { SharingService } from '../../services/sharing.service';*/

@Component({
    selector: 'app-visor-selector',
    templateUrl: './selector.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../visor.component.css']
})
export class SelectorComponent implements OnInit {
    @Input() idMuseo?:number;
    @Input() componentes:Componente[] = [];
    @Output() componenteUpdate :EventEmitter<number> = new EventEmitter<number>();
    @Output() componenteShow: EventEmitter<Componente> = new EventEmitter<Componente>();
    
    grupos:GrupoModelo[] = [];
    constructor(private modalService: NgbModal,private visorService: VisorService) {}
    openMenuModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
        //alert(this.idMuseo?.toString());
        if (this.idMuseo != null){
            this.getGrupos(this.idMuseo!);
        }
    }

    ngOnInit(): void {}
    async getGrupos(id:number){
        this.visorService.getGruposByRecinto(id)
        .subscribe((groups) => {
            this.grupos = [];
            groups.forEach((value) => {
                var n: GrupoModelo = new GrupoModelo(
                    value.nombre,
                    value.descripcion,
                    value.urlImagen,
                    value.createdDate,
                    value.updatedDate);
                n.IdGrupo = value.idGrupo;

                this.grupos.push(n);
            })
        },
        (error) => {
            if (error.error instanceof ErrorEvent){
                console.log("Error Event");
              } else{
                console.log(`error status : ${error.status} ${error.statusText}`);
                switch(error.status){
                  case 404:
                    console.log("No se encontró ningún grupo registrado");
                    break;
                }
              }
        })
    }
    getComponentes(id:number){
        //alert(id);
        this.componenteUpdate.emit(id);
    }
    showComponente(component:Componente){
        //alert(component.IdComponente);
        this.componenteShow.emit(component);
    }
   

}
