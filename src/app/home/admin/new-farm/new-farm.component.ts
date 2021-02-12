import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AdminService } from 'src/app/services/admin/admin.service'
@Component({
  selector: 'app-new-farm',
  templateUrl: './new-farm.component.html',
  styleUrls: ['./new-farm.component.scss']
})
export class NewFarmComponent implements OnInit {

  constructor(private adminService: AdminService, private translatr: TranslateService, private fb: FormBuilder,
    private messageService: MessageService) { }
  NewFarmForm: FormGroup
  ngOnInit(): void {
    this.initNewFarm()
  }
  initNewFarm() {
    this.NewFarmForm = this.fb.group({
      "usercode": [''],
      "Farm_name": []
    })
  }
  NewFarm() {
    this.adminService.NewFarm(this.NewFarmForm.value).subscribe(res => {
      console.log(res);
      this.NewFarmForm.reset()
      this.messageService.add({ severity: 'success', summary: 'success', detail: 'Add Farm Success' })
    })
  }
  // Change Language
  Langage: any = localStorage.getItem('Lang') ? localStorage.getItem('Lang') : localStorage.setItem('Lang', 'en')
  ChangLan(Lang) {
    localStorage.setItem('Lang', Lang)
    this.Langage = localStorage.getItem('Lang')
    this.translatr.use(this.Langage);
  }
}
