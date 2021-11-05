import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {
  @ViewChild('billEl') billInput: ElementRef;
  @ViewChild('tipEl') tipInput: ElementRef;
  @ViewChild('people') peopleInput: ElementRef;

  toggleFive: boolean = false;
  toggleTen: boolean = false;
  toggleFifteen: boolean = false;
  toggleTwenty: boolean = false;
  toggleFifty: boolean = false;
  bill: number;
  people: number;
  tip: number;
  tipPerPerson: number = 0;
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onBillEntered(bill: HTMLInputElement) {
    this.bill = bill.valueAsNumber;

    this.displayTip();
  }

  onPeopleEntered(people: HTMLInputElement) {
    this.people = people.valueAsNumber;

    this.displayTip();
  }

  onTipEntered(tip: HTMLInputElement) {
    this.tip = tip.valueAsNumber;
    this.toggleFive = this.toggleTen = this.toggleFifteen = this.toggleTwenty = this.toggleFifty = false;
    console.log(this.tip)

    this.displayTip();
  }

  tipSelected(tip: number) {
    // this.toggleFive = false;
    // this.toggleTen = false;
    // this.toggleFifteen = false;
    // this.toggleTwenty = false;
    // this.toggleFifty = false;
    this.tip = tip;
    this.tipInput.nativeElement.value = '';
    if (tip === 5) {
      this.toggleFive = !this.toggleFive;
      this.toggleTen = this.toggleFifteen = this.toggleTwenty = this.toggleFifty = false;
    }
    if (tip === 10) {
      this.toggleTen = !this.toggleTen
      this.toggleFive = this.toggleFifteen = this.toggleTwenty = this.toggleFifty = false;
    }
    if (tip === 15) {
      this.toggleFifteen = !this.toggleFifteen
      this.toggleFive = this.toggleTen = this.toggleTwenty = this.toggleFifty = false;
    }
    if (tip === 20) {
      this.toggleTwenty = !this.toggleTwenty
      this.toggleFive = this.toggleTen = this.toggleFifteen = this.toggleFifty = false;
    }
    if (tip === 50) {
      this.toggleFifty = !this.toggleFifty
      this.toggleFive = this.toggleTen = this.toggleFifteen = this.toggleTwenty = false;
    }
    console.log(this.tip)

    this.displayTip();
  }

  calculateTip() {
    this.tipPerPerson = (this.bill / 100 * this.tip) / this.people;
  }

  calculateTotal() {
    this.total = (this.bill + this.tip) / this.people;
  }

  displayTip() {
    if (!this.bill || !this.tip || !this.people) return;
    this.calculateTip();
    this.calculateTotal();
  }

  onReset() {
    this.toggleFive = this.toggleTen = this.toggleFifteen = this.toggleTwenty = this.toggleFifty = false;
    this.billInput.nativeElement.value = '';
    this.tipInput.nativeElement.value = '';
    this.peopleInput.nativeElement.value = '';
    this.bill = 0;
    this.tip = 0;
    this.people = 0;
    this.tipPerPerson = 0;
    this.total = 0;
  }
}
