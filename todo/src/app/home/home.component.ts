import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../shared/material.imports';



@Component({
  selector: 'app-home',
  imports: [ ...MATERIAL_IMPORTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
