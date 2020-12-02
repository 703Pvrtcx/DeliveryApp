import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {


  pathsList  = [
    {
      name: 'Home',
      path: 'tabs/home',
      icon : 'home'
    },
    {
      name: 'Shopping',
      path: 'tabs/detail',
      icon : 'cart'
    },
    {
      name: 'Profile',
      path: 'tabs/profile',
      icon : 'person'
    },
    {
      name: 'Contact',
      path: 'tabs/contact',
      icon : 'call'
    },
    {
      name: 'Maps',
      path: 'tabs/map',
      icon : 'map'
    },
    {
      name: 'Directions',
      path: 'tabs/leaflet',
      icon : 'navigate'
    },
    {
      name: 'maps',
      path: 'tabs/maps',
      icon : 'locate'
    }
]
  constructor(private router: Router) { }
  ngOnInit() {
  }
  goProfile(){
    this.router.navigateByUrl('sidemenu/profile');
  }
  goContact(){
    this.router.navigateByUrl('sidemenu/contact');
  }
  goMaps(){
    this.router.navigateByUrl('sidemenu/maps');
  }
  goLeaflet(){
    this.router.navigateByUrl('sidemenu/leaflet');
  }
  goDetail(){
    this.router.navigateByUrl('sidemenu/detail');
  }
  
  moveToPath(path){
      this.router.navigateByUrl('sidemenu/' + path.path);
  }

}
