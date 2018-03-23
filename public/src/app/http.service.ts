import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }

  addPet(pet){
    return this._http.post('/new', pet);
  }
  getAll(){
    return this._http.get('/pets/');
  }
  getPet(id){
    return this._http.get('/pets/'+ id);
  }
  deletePet(id){
    return this._http.delete('/pets/delete/'+id);
  }
  updatePet(id, pets){
    console.log(pets[0].name+ ' in service');
    return this._http.put('/pets/update/'+id, {pet: pets[0]});
  }
  addLike(id, up){
    return this._http.put('/pets/addLike/', {id: id, up: up});
  }
}
