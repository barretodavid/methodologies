import {Component, View} from 'angular2/core';

@Component({
  selector: 'question'
})
@View({
  template: `
  <div>
    <p>Are you sure?</p>
  </div>
  `
})
export class Question {
  answers: string[]
  constructor(answers: string[]) {
    this.answers = answers;
  }
}