import { Component,Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input()
  control:FormControl
  @Input () 
  label:string

showerrors(){
  return this.control.errors&&this.control.dirty&&this.control.touched
}


}
