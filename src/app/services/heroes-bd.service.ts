import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { URL_SERVICIO_HEROES } from 'src/config/url.servicios';

@Injectable({
  providedIn: 'root'
})
export class HeroesBDService {

  constructor(private http: HttpClient) { }

  //https://rest-sorella-production.up.railway.app/api/heroes
  getHeroes(){
    return this.http.get(`${URL_SERVICIO_HEROES}/heroes`, {}).pipe(
      map((res: any) => {
        console.log('HEROES',res);
        return res;
      })
    );
  }

  //https://rest-sorella-production.up.railway.app/api/heroes/655d2285269e4c4c6086539c  
  getUnHeroe(idHeroe:string){
    return this.http.get(`${URL_SERVICIO_HEROES}/heroes/${idHeroe}`, {}).pipe(
      map((res: any) => {
        console.log('Heroe',res);
        return res;
      })
    );
  }

  //https://rest-sorella-production.up.railway.app/api/multimedias/fotos/655ce494269e4c4c60865293

  getFotosHeroe(idHeroe:string){
    return this.http.get(`${URL_SERVICIO_HEROES}/multimedias/fotos/${idHeroe}`, {}).pipe(
      map((res: any) => {
        console.log('FotosHeroe',res);
        return res;
      })
    );
  }







}
