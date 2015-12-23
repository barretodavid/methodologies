import {Component, View} from 'angular2/core';
import {Question} from './question/question'

@Component({
  selector: 'methodologies-app'
})
@View({
  directives: [Question],
  template: `
  <div>
    <question></question>
    <question></question>
  </div>
  `
})
export class MethodologiesApp {
}