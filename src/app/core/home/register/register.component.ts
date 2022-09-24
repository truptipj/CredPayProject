import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;

  constructor(private registerService: RegisterService, private fb:FormBuilder, private router:Router,) { }

  ngOnInit(): void {
      this.registerForm = this.fb.group({
        UserName: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        FullName: ['', Validators.required],
      Password: [  '', [
        Validators.required
       ]  ],
       },);
  }
  public onSubmit(): void {
    console.log(this.registerForm.value);
    let url =environment.baseUrl + "Authenticate/register";
    this.registerService.registerPostData(url,this.registerForm.value).subscribe((res)=>{
      this.router.navigate(['login'])
    })

}
openLogin(){
  this.router.navigate(['login'])
}
}
