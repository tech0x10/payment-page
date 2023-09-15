import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-creditcardform',
  templateUrl: './creditcardform.component.html',
  styleUrls: ['./creditcardform.component.scss']
})
export class CreditcardformComponent {

  formofcard = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    cardnumber: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]+$/)]),
    expiration: new FormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securitycode: new FormControl('', [Validators.required, Validators.min(100),Validators.max(999)])
  })

onreset(){
this.formofcard.reset()
}
}
