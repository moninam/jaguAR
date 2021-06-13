import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    constructor(private modalService: NgbModal) {}
    openMenuModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }

    ngOnInit(): void {}
    /*public isMenuCollapsed = true;

    @Output() onFilter: EventEmitter<any> = new EventEmitter();

    grupos : GrupoModelo [];
    tab: number;
    listaGrupos: Grupo[];


    constructor(private grupoService: GrupoServicioService, private sharingService: SharingService) {
        this.tab = 1;

    }

    clickFilter(n: number, event):void {
        //marca como seleccionado
        var images = document.getElementsByClassName('img-fluid');
        for(var _i = 0; _i < images.length; _i++){
            images[_i].classList.remove('active');
        }
        event.target.classList.toggle('active');
        // this.onFilter.emit('Register click');
        this.detectAction(n);
    }

    ngOnInit() : void {

    }

    ngAfterViewInit(): void {
        this.getGrupos();
        this.configNavBar();
    }

    changeModel(n : number) : void{this.tab = n;}

    detectAction(n:number){
        this.getGruposModelo(n);
    }
    async getGruposModelo(n:number){

        let temp = this.grupoService.getGruposModelo(n);
        temp.then((data)=>{
            this.grupos = data;
            this.sharingService.setModelos(this.grupos);
            this.sharingService.filter('Register click');
            this.grupos.forEach(function(value){
                console.log(value.idGrupoModelo);
            })
        }).catch((error)=>{
            console.log("Promise rejected with " + JSON.stringify(error));
        });
    }

    async getGrupos(){
        let grupos = this.grupoService.getGruposList();
        grupos.then((data)=>{
            this.listaGrupos = data;
            console.log("Si tiene datos");
        }).catch((error)=>{
            console.log("Promise rejected with "+ JSON.stringify(error))
        });
    }

    get TabValue(){return this.tab;}

    configNavBar(){
        var slider = document.querySelector(".slide-wr");
        document.getElementById("back").onclick = () => {
            const c = 33.33;
            let left = slider.style.transform.split("%")[0].split("(")[1];
            if (left) {
                var num = Number(left) + Number(c);
            } else {
                var num = Number(c);
            }
            slider.style.transform = `translateX(${num}%)`;

            if (left == -166.65) {
                slider.addEventListener("transitionend", myfunc);
                function myfunc() {
                    this.style.transition = "none";
                    this.style.transform = `translateX(-299.97%)`;
                    slider.removeEventListener("transitionend", myfunc);
                }
            } else {
                slider.style.transition = "all 0.5s";
            }
        };

        document.getElementById("forward").onclick = () => {
            const c = -33.33;
            let left = slider.style.transform.split("%")[0].split("(")[1];
            if (left) {
                var num = Number(left) + Number(c);
            } else {
                var num = Number(c);
            }

            slider.style.transform = `translateX(${num}%)`;

            if (left == -299.97) {
                console.log("reached the border");
                slider.addEventListener("transitionend", myfunc);
                function myfunc() {
                    this.style.transition = "none";
                    this.style.transform = `translateX(-166.65%)`;
                    slider.removeEventListener("transitionend", myfunc);
                }
            } else {
                slider.style.transition = "all 0.5s";
            }
        };

        const sliderChildren = document.getElementsByClassName("slide-wr")[0].children;
        slider.style.transform = `translateX(${sliderChildren.length * -33.33}%)`;
        Array.from(sliderChildren)
            .slice()
            .reverse()
            .forEach((child) => {
                let cln = child.cloneNode(true);
                cln.classList += " cloned before";
                slider.insertBefore(cln, sliderChildren[0]);
            });

        Array.from(sliderChildren).forEach((child) => {
            let cln = child.cloneNode(true);
            if (child.classList.contains("cloned") === false) {
                cln.classList += " cloned after";
                slider.appendChild(cln);
            }
        });
    }*/

}
