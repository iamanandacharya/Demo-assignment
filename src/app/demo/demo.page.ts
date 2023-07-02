import { Component, OnInit } from '@angular/core';

import { formatDate } from '@angular/common';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
  todayDate: any;
  yesterdayDate: any;
  tenDaysPastDate: any;
  oneYearPastDate: any;
  enableDTComp: boolean = false;
  minDate: string;
  maxDate: string;
  selectedDate: string = '';
  today: string;
  yesterday: string;
  tenDaysAgo: string = '';
  oneYearAgo: string = '';
  submitted: boolean = false;
  constructor() {
    const today = new Date();
    const tomorrow = new Date(today.getFullYear() + 5, today.getMonth(), today.getDate() + 1);
    this.minDate = this.formatDate(tomorrow);
    this.maxDate = this.formatDate(this.getFutureDate(100));
    this.today = this.formatDate(today);
    this.yesterday = this.formatDate(this.getPastDate(1));
  }


  ngOnInit() {
  }
  formatDate(date: Date): string {
    return formatDate(date, 'yyyy-MM-dd', 'en');
  }

  getFutureDate(years: number): Date {
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + years);
    return futureDate;
  }

  getPastDate(days: number): Date {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - days);
    return pastDate;
  }
  get10PastDate(days: number): Date {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - days);
    return pastDate;
  }
  openCalendar() {
    const dateInput = document.querySelector(
      'ion-datetime input'
    ) as HTMLInputElement;
    setTimeout(() => {
      dateInput.click();
    }, 100);
  }

  submitForm() {
    this.tenDaysAgo = this.formatDate(this.getPastDate(10));
    this.oneYearAgo = this.formatDate(this.getPastDate(365));
    this.submitted = true;
  }
  openDateTimeCompo() {
    this.enableDTComp = true;
  }
  confirm(selectedDate: any) {
    console.log('selectedDate' + selectedDate);
    this.selectedDate = this.formatDate(selectedDate);
    // Today Date
    this.todayDate = new Date(new Date());
    const yesterday = new Date(this.todayDate.getFullYear(), this.todayDate.getMonth(), this.todayDate.getDate() - 1);

    // Yesterday Date
    this.yesterdayDate = this.formatDate(yesterday);
    const selectedDateFormat = this.formatDate(selectedDate);

    // Ten Days Past from Selected Days
    const tenDaysPastFormat = new Date(selectedDateFormat);
    tenDaysPastFormat.setDate(tenDaysPastFormat.getDate() - 10);
    this.tenDaysPastDate = this.formatDate(tenDaysPastFormat);

    // One Year Past from Selected Days
    const oneYearPastFormat = new Date(selectedDate);
    oneYearPastFormat.setFullYear(oneYearPastFormat.getFullYear() - 1);
    this.oneYearPastDate = this.formatDate(oneYearPastFormat);

  }
}
