import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';
import { faHospitalUser, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  faPacient = faHospitalUser;
  faDoctor = faUserDoctor;
  mode = new FormControl('over' as MatDrawerMode);
  constructor() { }

  ngOnInit(): void {
  }


}
