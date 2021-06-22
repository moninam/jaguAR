import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Componente } from 'src/app/models/componente';
import { Grupo } from 'src/app/models/grupo';
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
    @Input() idMuseo?: number;
    @Input() componentes: Componente[] = [];
    @Output() componenteUpdate: EventEmitter<number> = new EventEmitter<number>();
    @Output() componenteShow: EventEmitter<Componente> = new EventEmitter<Componente>();

    public hasGroups = false;
    public hasComponentes = false;
    public message = '';

    grupos: Grupo[] = [];
    constructor(private modalService: NgbModal, private visorService: VisorService) {}
    openMenuModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
         // alert(this.idMuseo?.toString());
        if (this.idMuseo != null){
            this.getGrupos(this.idMuseo!);
        }
    }

    ngOnInit(): void {}
    async getGrupos(id: number){
        this.visorService.getGruposByRecinto(id)
        .subscribe((groups) => {
            this.grupos = [];
            groups.forEach((value) => {
                const n: Grupo = new Grupo(
                    value.nombre,
                    value.descripcion,
                    value.urlImagen,
                    value.createdDate,
                    value.updatedDate);
                n.GrupoId = value.idGrupo;
                this.grupos.push(n);
            });
            this.hasGroups = true;
        },
        (error) => {
            if (error.error instanceof ErrorEvent){
                console.log('Error Event');
              } else{
                console.log(`error status : ${error.status} ${error.statusText}`);
                switch(error.status){
                  case 404:
                    console.log('No se encontró ningún grupo registrado');
                    this.hasGroups = false;
                    this.hasComponentes = false;
                    this.message = 'No se encontró ningún grupo registrado';
                    break;
                }
              }
        });
    }
    getComponentes(id: number, event: any): void{
        // alert(id);
        // marca la clase seleccionada
        const images = document.getElementsByClassName('selector-img');
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('selected');
        }
        event.target.classList.toggle('selected');
        // carga sus componentes
        this.componenteUpdate.emit(id);
        this.hasComponentes = true;
    }
    showComponente(component: Componente): void{
        // alert(component.IdComponente);
        this.componenteShow.emit(component);
    }
}
