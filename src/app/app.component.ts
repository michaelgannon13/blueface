import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data;
  countires = {
    "countries": []
  }
  filteredResult = 'test';

  constructor(private dataService: DataService) { }

  getData() {
    this.dataService.getData()
      .subscribe((res: any[]) => {
        this.data = res;
        this.processData(this.data);
      });
  }

  processData(data){

    var flattenedArray = [];

    const partners = data.partners;

    console.log(partners);

    function checkDate(date) {
      console.log(date);
      
      return date = date+1 ;
    }
    

    const test = partners.filter((value) => {
      return value.availableDates.every(checkDate);
    });

    console.log(test);
    






      // for(let i = 0; i< partners.length; i++){
      //   const partnersDates = partners[i].availableDates;

      //   const arrayLength = partnersDates.length;
      //   for (let p = 0; p < arrayLength; p++) {

      //     let date = partnersDates[p]
      //     console.log(date);

      //     if (date === date+1 || date === date-1) {
      //       console.log(true);
            
      //     }
      //   }
                

      // }
      
    
    // this.postData(this.filteredResult);
  }

  postData(val) {
    this.dataService.postData(val);
  }
}
