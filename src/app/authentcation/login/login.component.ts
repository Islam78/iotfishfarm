import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
import { first } from 'rxjs/operators'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private authServices: AuthService,
    private fb: FormBuilder,
    private translatr: TranslateService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }
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
  error
  LOGIN() {
    console.log(this.LoginForm.value);
    this.authServices.Login(this.LoginForm.value)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          if (res.error) {
            this.error = res.error;
            this.messageService.add({ severity: 'error', summary: 'Error', detail: `${this.error}` })
            return
          }
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.error = error;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: `${this.error}` })
        }
      });
  }
}
