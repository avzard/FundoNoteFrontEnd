import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit {
  Forgotemail!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserserviceService) { }

  ngOnInit() {
    this.Forgotemail = this.formBuilder.group({


      email: ['', [Validators.required, Validators.email]],

    });

  }
  get f() { return this.Forgotemail.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.Forgotemail.valid) {
      let reqdata = {

        Email: this.Forgotemail.value.email,

      }
      this.user.forgotemail(reqdata).subscribe((response: any) => {
        console.log(response);
      }
      )
    }

  }
  onReset() {
    this.submitted = false;
    this.Forgotemail.reset();
  }

}





