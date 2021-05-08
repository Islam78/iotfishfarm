import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
import { SharedService } from 'src/app/services/shared/shared.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authServices: AuthService, private http: HttpClient,
    private fb: FormBuilder, private translatr: TranslateService,
    private SharedService: SharedService, private _Router: Router,
    private messageService: MessageService) { }
  LoginForm: FormGroup
  ngOnInit(): void {
    this.InitForm()
  }
  InitForm() {
    this.LoginForm = this.fb.group({
      code: [''],
      password: [''],
      type: ['']
    })
  }
  // Change Language
  Langage: any = localStorage.getItem('Lang') ? localStorage.getItem('Lang') : localStorage.setItem('Lang', 'en')
  ChangLan(Lang) {
    localStorage.setItem('Lang', Lang)
    this.Langage = localStorage.getItem('Lang')
    this.translatr.use(this.Langage);
  }

  LOGIN() {
    console.log(this.LoginForm.value);
    this.authServices.Login(this.LoginForm.value).subscribe((res: any) => {
      //this is admin
      if (res.result?.Admin_code) {
        this._Router.navigate(['/'])
        this.messageService.add({ severity: 'success', summary: 'Admin Login Success', detail: `Welcom, ${res.result.Name}` })
      }
      //this is user
      else if (res.result?.usercode) {
        this._Router.navigate(['/'])
        this.messageService.add({ severity: 'success', summary: 'Login Success', detail: `Welcom, ${res.result.Name}` })
      }
      //Error
      else if (res?.error) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${res?.error}` })
      }
      localStorage.setItem('user', JSON.stringify(res))
    }
    )
  }
}
