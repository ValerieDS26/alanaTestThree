import { HttpClient } from '@angular/common/http';
import { Http,RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { global } from  '../../app/global';
import { Candidate } from '../../app/classes/Candidate';
import { Vacancy } from '../../app/classes/Vacancy';
import { Company } from '../../app/classes/Company';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  constructor(public http: Http) {

  }

  public login(data): Observable<any>{
    let _params = 'email='+data.value.email+'&password='+data.value.password;
    var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var options = new RequestOptions({ headers: headers });
    
    return this.http.post(global.API_USER_LOGIN, _params, options)
               .pipe(map((response) => response.json()));

  }

  public getUserData(token): Observable<Candidate>{

    let _headers = new Headers();
        _headers.append('Authorization', 'Bearer ' + token);
    let _options = { headers: _headers };
    
    return this.http.get(global.API_USER_PROFILE, _options)
                .pipe(
                    map((response) => {
                        let data = response.json().response;
                         let candidate: Candidate = new Candidate();
                            candidate.photo = data.profilePicture;
                            candidate.name = data.name;
                            candidate.lastName =data.lastName;
                            candidate.email = data.email;
                            candidate.phone = data.countryCode.code + " " + data.phone;
                            candidate.age = data.birthDate;
                            candidate.address = data.address.name;
                       
                        return candidate;
                    })
                );

  }

  public getCompanies(token): Observable<Company[]>{
    
    let _params =  {offset: 0, limit: 10, apply: 0};
    var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
    var options = { params: _params, headers: headers };
    
    return this.http.get(global.API_GET_COMPANIES, options)
               .pipe(
                    map((response) => {
                        let data = response.json().response;
   
                        let companies: Company[] = [];
                        for (let item of data){
  
                            let company: Company = new Company();
                            company.idCompany = item.company.id;
                            company.photo = item.company.logo;
                            company.name = item.company.name;
                            company.numVacancies = item.jobs.length;
                            company.distance = item.maxDistance;
                            companies.push(company);
                        }
                        return companies;
                    })
                );
  }

  public getVacancies(token,id): Observable<Vacancy[]>{

    let _params =  {offset: 0, limit: 10, apply: 0};
    var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        headers.append('company', id);
    var options = { params: _params, headers: headers };
    
    return this.http.get(global.API_GET_VACANTES, options)
              .pipe(
                    map((response) => {
                        let data = response.json().response;
                     
                        let vacancies: Vacancy[] = [];
                        for (let item of data){
                            
                            let vacancy: Vacancy = new Vacancy();
                             vacancy.photo = item.publication.jobPosition.icon;
                             vacancy.jobPositionName = item.publication.jobPosition.jobPositionName;
                             vacancy.title = item.publication.title;
                             vacancy.distance = item.distance;
                             vacancies.push(vacancy);
                        }
                        return vacancies;
                    })
                );

  }
}
