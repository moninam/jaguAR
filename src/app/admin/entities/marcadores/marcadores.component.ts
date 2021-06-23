import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MarcadorAdmin } from 'src/app/models/marcador-admin';

@Component({
    selector: 'app-marcadores',
    templateUrl: './marcadores.component.html',
    styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements OnInit{
    fileName:string = '';
    fileMarcador?:File;
    editForm:FormGroup = new FormGroup({
        nombre: new FormControl('',[Validators.required]),
        idMarcador : new FormControl(''),
        urlImagen : new FormControl('')
    });
   
    marcadores:MarcadorAdmin[] = [];
    deleteMarcador = 0;

    constructor(private modalService: NgbModal) {}
    ngOnInit(): void {
    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }

    editModal(content:any,marcador:MarcadorAdmin){

    }
    deleteModal(content:any,idMarcador:number){
        this.deleteMarcador = idMarcador;
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
    get idMarcador(){
        return this.editForm.get('idMarcador');
    }
    get urlImagen(){
        return this.editForm.get('urlImagen');
    }
}