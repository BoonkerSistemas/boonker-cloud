import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthService} from '../../core/auth/auth.service';
import {UsuarioDto} from "../../dtos/usuario.dto";
import {UpdateResultDto} from "../../dtos/update-result.dto";
import {InsertResultDto} from "../../dtos/insert-result.dto";

@Injectable({
    providedIn: 'root'
})
export class PlazaService {

    private nombreModelo = 'place';

    constructor(
        private readonly httpClientService: HttpClient,
        private readonly autenticacionService: AuthService
    ) {
    }

    create(objeto: any): Observable<any> {
        const url = environment.api_url + this.nombreModelo;
        try {
            return this.httpClientService.post<InsertResultDto>(url, objeto);
        } catch (e) {
            console.log(e)
        }

    }

    findAll(): Observable<any[]> {
        
        return this.httpClientService.get<any[]>(environment.api_url + this.nombreModelo,);
    }

    findOneName(name: string): Observable<any[]> {
        
        return this.httpClientService.get<any[]>(environment.api_url + this.nombreModelo + "/name/" + name);
    }


    updateOneById(objeto: any): Observable<UpdateResultDto> {
        const url = environment.api_url + this.nombreModelo + '/' + objeto._id;
        
        return this.httpClientService.patch<UpdateResultDto>(url, objeto,);
    }

    delete(objeto: any): Observable<UsuarioDto> {
        return this.httpClientService
            .delete<any>(environment.api_url + this.nombreModelo + `/${objeto._id}`);
    }
}
