import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> =[ 
    {
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: 'fa-sharp fa-solid fa-chart-pie',
        url: ''
      },
      {
        id: '12',
        titre: 'Statistiques',
        icon: 'fas fa-chart-bar',
        url: 'statistiques'
      },
    ]
  },
  {
    id: '2',
    titre: 'Articles',
    icon: 'fas fa-boxes',
    url: '',
    sousMenu: [
      {
        id: '21',
        titre: 'Articles',
        icon: 'fas fa-boxes',
        url: 'articles'
      },
      {
        id: '22',
        titre: 'Mouvements du stocks',
        icon: 'fa-solid fa-eye',
        url: ''
      },
    ]
  },
  {
    id: '3',
    titre: 'Clients',
    icon: 'fa-solid fa-users',
    url: '',
    sousMenu: [
      {
        id: '31',
        titre: 'Clients',
        icon: 'fa-solid fa-users',
        url: ''
      },
      {
        id: '32',
        titre: 'Commandes clients',
        icon: 'fa-solid fa-truck-fast',
        url: ''
      },
    ]
  },
  {
    id: '4',
    titre: 'Fourmisseurs',
    icon: 'fa-solid fa-users',
    url: '',
    sousMenu: [
      {
        id: '41',
        titre: 'Fournisseurs',
        icon: 'fa-solid fa-users',
        url: ''
      },
      {
        id: '42',
        titre: 'Commandes fournisseurs',
        icon: 'fa-solid fa-truck-fast',
        url: ''
      },
    ]
  },
  {
    id: '5',
    titre: 'Parametrages',
    icon: 'fas fa-cogs',
    url: '',
    sousMenu: [
      {
        id: '51',
        titre: 'Categories',
        icon: 'fas fa-tools',
        url: ''
      },
      {
        id: '52',
        titre: 'Utilisateurs',
        icon: 'fas fa-users-cog',
        url: ''
      },
    ]
  }
  
];

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  navigate(url?: string): void {
    this.router.navigate([url]);

  }

}
