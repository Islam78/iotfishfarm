import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  constructor(
    private ActiveRoute: ActivatedRoute,
    private adminService: AdminService,
    private translatr: TranslateService,
  ) { }
  ActiveUrl
  Result

  ngOnInit(): void {
    this.ActiveRoute.params.subscribe(res => this.ActiveUrl = res[0])
    this.GetAll()
  }

  GetAll() {
    this.adminService.GetAllUsers(this.ActiveUrl).subscribe((res: any) => this.Result = res.result)
  }

  delete(item) {
    this.adminService.DeleteUser(this.ActiveUrl, item).subscribe((res: any) => this.GetAll())
  }

  selectedItem: any
  edit(item) {
    this.selectedItem = item
    this.showModalDialog()
  }

  SaveEdit() {
    this.adminService.EditUser(this.ActiveUrl, this.selectedItem).subscribe(res => {
      console.log(res);
      this.GetAll()
      this.displayModal = false
    })
  }

  displayModal = false
  showModalDialog() {
    this.displayModal = true;
  }

  Langage: any = localStorage.getItem('Lang') ? localStorage.getItem('Lang') : localStorage.setItem('Lang', 'en')
  ChangLan(Lang) {
    localStorage.setItem('Lang', Lang)
    this.Langage = localStorage.getItem('Lang')
    this.translatr.use(this.Langage);
  }
}
