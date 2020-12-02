import { Feature, MapboxService } from './../../services/mapbox.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {


  checkAddress ="";

  delivery = false;
  collect = true;
  coordinates : any;
  list : any;
  selectedAddress : string= "";
  lat;
  lng;


  addresses = [];

  constructor(private mapDoa: MapboxService) { }

  ngOnInit() {
  }




  search(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      this.mapDoa.search_word(searchTerm)
        .subscribe((features: Feature[]) => {
          this.coordinates = features.map(feat => feat.geometry)
          this.addresses = features.map(feat => feat.place_name)
          this.list = features;
          console.log(this.list)
        });
    } else {
      this.addresses = [];
    }
  }


  addressCheck(event){
    this.checkAddress = event.target.value;
    console.log("info",this.checkAddress);


}


onSelect(address, i) {
  this.selectedAddress = address;
  //  selectedcoodinates=

  console.log("lng:" + JSON.stringify(this.list[i].geometry.coordinates[0]))
  console.log("lat:" + JSON.stringify(this.list[i].geometry.coordinates[1]))
  this.lng = JSON.stringify(this.list[i].geometry.coordinates[0])
  this.lat = JSON.stringify(this.list[i].geometry.coordinates[1])
  // this.user.coords = [this.lng,this.lat];
  console.log("index =" + i)
  console.log(this.selectedAddress)
  // this.user.address = this.selectedAddress;
  this.addresses = [];
}

}
