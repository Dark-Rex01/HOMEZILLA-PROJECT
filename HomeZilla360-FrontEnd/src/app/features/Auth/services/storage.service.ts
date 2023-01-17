import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class StorageService{
    
    removeToken() {
        window.localStorage.removeItem('auth-token');
    }
    
    saveToken(user: string){
        window.localStorage.removeItem('auth-token');
        window.localStorage.setItem('auth-token', user);
    }
}