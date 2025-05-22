import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../shared/material.imports';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [...MATERIAL_IMPORTS, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
