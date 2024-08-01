import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    if(environment.production == false){
      this.ROOT_URL = 'http://localhost:8080'
    }else{
      this.ROOT_URL = 'http://localhost:3000'
    }
  }

  initializeDB(){
    return this.http.get(`/dbinitialize`)
  }

  getTeacherData(){
    return this.http.get('/listTeachers')
  }

  getStudentData(){
    return this.http.get(`/listStudents`)
  }

  getOneStudentData(payload: Object){
    return this.http.post(`/getStudentInfo`, payload)
  }

  getOneTeacherData(payload: Object){
    return this.http.post(`/getTeacherInfo`, payload)
  }

  addTeacher(payload: Object){
    return this.http.post(`/addTeacher`, payload)
  }

  deleteTeacher(payload: Object){
    return this.http.post(`/deleteTeacher`, payload)
  }

  editTeacher(payload: Object){
    return this.http.post(`/editTeacher`, payload)
  }

  editStudent(payload: Object){
    return this.http.post(`/editStudent`, payload)
  }

  addStudent(payload: Object){
    return this.http.post(`/addStudent`, payload)
  }

  deleteStudent(payload: Object){
    return this.http.post(`/deleteStudent`, payload)
  }
}
