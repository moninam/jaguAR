import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MultimediaAdmin } from 'src/app/models/multimedia-admin';

@Component({
    selector: 'app-multimedia',
    templateUrl: './multimedia.component.html',
    styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit{
    constructor(private modalService: NgbModal) {}

    fileName:string = '';
    fileMultimedia?:File;
    editForm:FormGroup = new FormGroup({
        nombre: new FormControl('',[Validators.required]),
        tipo: new FormControl('',[Validators.required]),
        idMultimedia : new FormControl(''),
        urlImagen : new FormControl('')
    });
    componentType = [
        {value:"VIDEO",name:"Video"},
        {value:"IMAGEN",name:"Imagen"}
    ];
    multimedias:MultimediaAdmin[] = [];
    deleteMultimedia = 0;
    
    ngOnInit(): void {
    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    editModal(content:any,multimedia:MultimediaAdmin){

    }
    deleteModal(content:any,idMultimedia:number){
        this.deleteMultimedia = idMultimedia;
    }
    onRegister(value:any){

    }
    onFileSelected(event:any){

    }
    onEdit(){

    }
    onDelete(){
        
    }
    isValid(){
        return this.editForm.valid;
    }
    get nombre(){
        return this.editForm.get('nombre');
    }
    get tipo(){
        return this.editForm.get('tipo');
    }
    get idMultimedia(){
        return this.editForm.get('idMultimedia');
    }
    get urlImagen(){
        return this.editForm.get('urlImagen');
    }
}
