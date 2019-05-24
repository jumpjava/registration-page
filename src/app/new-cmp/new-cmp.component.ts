import { Component, OnInit,NgModule } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css'],
  }
)
export class NewCmpComponent implements OnInit {


  isavailable = false;
  todaydate = new Date();
  value: string;
  value1: string;
  result: string;

  newcomponent = "Entered in new component created";
  buttonClickedStatus = '';
  valueError='';
  secondheadre = "Welcome to angular 4.0 Demo";
  regwelcome="New Registration Page !!!";
  clender = 'Calender Demo';
  fnameValue = '';
  mnameValue = '';
  lnameValue = '';
  emialIDValue = '';
  dobValue :Date;
  selectedCategories: string[];
  selectGender : string;
  cities2: City[];
  selectedCity2: City;
 
  constructor() { 
        this.cities2 = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
      //this.selectedCity2.name="New York";
      //this.selectedCity2.code="NY";
 
  }
  testme(){
    console.log(" test value --- "+ JSON.stringify(this.selectedCity2.name));
  }
  ngOnInit() {
    
   }

  //subjectValue='';
   mycheck : boolean = false;
  subjectValue = 'JAVA';

  months = ["January", "Feburary", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"];

  day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  carsArray = [ "Audi","BMW","Fiat","Ford","Honda","Jaguar","Mercedes","Renault","VW","Volvo"];

  jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };

  listOfCountry = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
	,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  
  onFirstName(event: Event) {
    console.log(event);
    this.fnameValue = (<HTMLInputElement>event.target).value;
  }

  onLastName(event: Event) {
    console.log(event);
    this.lnameValue = (<HTMLInputElement>event.target).value;
  }

  onEmailID(event: Event) {
    console.log(event);
    this.emialIDValue = (<HTMLInputElement>event.target).value;
  }


  // onDOB(event: Event) {
  //   console.log("DOb CALEED");
  //   console.log(event);
  //   this.dobValue = (<HTMLInputElement>event.target).value;
  // }

  myformSubmitFunction() {
  
    console.log("Called from  myformSubmitFunction");
  
    //this.buttonClickedStatus='After Submiting First Name is:'+this.fnameValue;
    //this.buttonClickedStatus='After Submiting Last Name is:'+this.lnameValue;
    //this.buttonClickedStatus='After Submiting Subject is:'+this.subjectValue;
    //this.buttonClickedStatus='After Submiting Email ID is:'+this.emialIDValue;
    //this.buttonClickedStatus='After Submiting Email ID is:'+this.selectedCategories;
    //this.buttonClickedStatus = 'Users First Name is:' + this.fnameValue + ' Last name : ' + this.lnameValue +' and his/her Sex is '+this.selectedCategories +' Subject is choosen : ' + this.subjectValue + ' and his Emial ID is : ' + this.emialIDValue + ' Date : ' + this.dobValue; 
         
    if( (this.fnameValue ==' ') || 
        (this.lnameValue ==' ') || 
        (this.mnameValue ==' ') ||
        (this.subjectValue ==' ') || 
        (this.emialIDValue ==' ') || 
        (this.subjectValue ==' ') || 
        (this.emialIDValue ==' ') || 
        (this.dobValue ==null) ||
        (this.selectGender ==' ')){
      console.log(" Value NOT Entred !!!"); 
      this.mycheck = false;
      this.valueError='Please enter the value in all the required above field';
      
    }else{
      this.mycheck = true;
      console.log(" Value Entred !!!"); 
      this.buttonClickedStatus = 'Users First Name is:' + this.fnameValue + ' Middle Name : '+this.mnameValue+' Last name : ' + this.lnameValue +' and his/her Sex is '+this.selectGender +' Subject is choosen : ' + this.subjectValue + ' and his Emial ID is : ' + this.emialIDValue + ' Date : ' + this.dobValue; 

    }
    
  }

  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log("Click function clicked");
    //console.log(this.);

  }
  changemonths(event) {
    console.log("Changed month from the Dropdown");
    console.log(event);
  }

  changeday(data) {

    console.log("Changed day from the Dropdown" + data);

    console.log(data);
  }

}

@Injectable()
export class MyserviceService {
  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}

