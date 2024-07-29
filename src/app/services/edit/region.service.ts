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
export class RegionService {

    private nombreModelo = 'region';

    constructor(
        private readonly httpClientService: HttpClient,
        private readonly autenticacionService: AuthService
    ) {
    }

    create(objeto: any): Observable<any> {
        const url = environment.api_url + this.nombreModelo;
        return this.httpClientService.post<InsertResultDto>(url, objeto);
    }

    findAll(): Observable<any[]> {
        
        return this.httpClientService.get<any[]>(environment.api_url + this.nombreModelo,);
    }


    updateOneById(objeto: any): Observable<any> {
        const url = environment.api_url + this.nombreModelo + '/' + objeto._id;
        
        return this.httpClientService.patch<UpdateResultDto>(url, objeto,);
    }


    delete(objeto: any): Observable<UsuarioDto> {
        return this.httpClientService
            .delete<any>(environment.api_url + this.nombreModelo + `/${objeto._id}`);
    }
}