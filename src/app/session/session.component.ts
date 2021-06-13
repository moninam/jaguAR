import { Component } from '@angular/core';

@Component({
    selector: 'app-session',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.css']

})
export class SessionComponent{

    showContent(section: number): void{
        const nav = document.getElementById('login_navigation');
        const login = document.getElementById('login_section');
        const register = document.getElementById('register_section');
        if (nav != null && login != null && register != null){
            switch (section) {
                case 1:
                    nav.classList.add('show-element'); nav.classList.remove('hide-element');
                    login.classList.add('hide-element'); login.classList.remove('show-element');
                    register.classList.add('hide-element'); register.classList.remove('show-element');
                    break;
                case 2:
                    login.classList.add('show-element'); login.classList.remove('hide-element');
                    nav.classList.add('hide-element'); nav.classList.remove('show-element');
                    register.classList.add('hide-element'); register.classList.remove('show-element');
                    break;
                case 3:
                    register.classList.add('show-element'); register.classList.remove('hide-element');
                    nav.classList.add('hide-element'); nav.classList.remove('show-element');
                    login.classList.add('hide-element'); login.classList.remove('show-element');
                    break;
                default:
                    break;
            }
        }
    }
    constructor() { }

}
