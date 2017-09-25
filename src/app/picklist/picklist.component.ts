import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picklist',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.css']
})
export class PicklistComponent implements OnInit {

   list1: any[];
    
    list2: any[];
    
    ngOnInit() {
        this.list1 = ['java','spring','angular','html','css','bootstrap','primeng'];
        this.list2 = ['mysql','oracle','redis','mongodb'];
    }




  constructor() { }

  

  sourceToTargetOne(){
    
  }

  sourceToTargetMultiple(){}

  targetToSourceOne(){}

  targetToSourceMultiple(){}



}
