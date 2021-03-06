import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { ReportService } from 'src/app/services/reports/report.service'
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  providers: [MessageService]

})
export class ReportsComponent implements OnInit {
  data: any;
  Farm_name
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private ReportSer: ReportService,
    private translatr: TranslateService,
    private ActiveRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.initForm()
    this.ActiveRoute.params.subscribe(res => this.Farm_name = res.id)
  }
  SearchCriteria: FormGroup;
  initForm() {
    this.SearchCriteria = this.fb.group({
      User_code: ["hema"],
      Farm_name: [this.Farm_name],
      Start_Date: [''],
      End_Date: [''],
      Period: ['']
    })
  }

  ShowChart = false;
  Sensors: any = new Array<any>();
  leng: any = new Array<Date>();
  PH_sensor: any = new Array<any>();
  Temperature_sensor: any = new Array<any>();
  onSubmit() {
    this.SearchCriteria.get('Farm_name').setValue(this.Farm_name)
    this.ReportSer.getReport(this.SearchCriteria.value).subscribe((res: any) => {
      if (res.result[0]) {
        this.PH_sensor = []
        this.Temperature_sensor = []
        this.leng = []
        this.Sensors = res.result
        this.ShowChart = true
      }
      for (let index = 0; index < this.Sensors.length; index++) {
        this.leng.push(this.Sensors[index].date.slice(0, 9))
        this.PH_sensor.push(this.Sensors[index].PH_sensor)
        this.Temperature_sensor.push(this.Sensors[index].Temperature_sensor)
      }
      this.MakeData();
    })
  }

  options;
  MakeData() {
    this.data = {
      labels: this.leng,
      datasets: [
        {
          label: 'PH',
          data: this.PH_sensor,
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'temperature',
          data: this.Temperature_sensor,
          fill: false,
          borderColor: 'red'
        }
      ]
    }
    this.options = {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            display: true,
            position: 'left',
            type: "linear",
            scaleLabel: {
              display: true,
              labelString: 'USD',
              beginAtZero: true,
            },
            id: "id1"
          },
          {
            scaleLabel: {
              display: true,
              labelString: 'Commissions',
              beginAtZero: true,
            },
            display: true, // Hopefully don't have to explain this one.
            type: "linear",
            position: "right",
            gridLines: {
              display: false
            },
            id: "id2"
          }
        ]
      }
    };
  }
  selectData(event) {
    this.messageService.add({ severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index] });
  }
  ChartType = 'line'
  ChangeChart(value) {
    this.ChartType = value.target.value
  }
  // Change Language
  Langage: any = localStorage.getItem('Lang') ? localStorage.getItem('Lang') : localStorage.setItem('Lang', 'en')
  ChangLan(Lang) {
    localStorage.setItem('Lang', Lang)
    this.Langage = localStorage.getItem('Lang')
    this.translatr.use(this.Langage);
  }
  ShowPassord = false
  showPassword() {
    this.ShowPassord = !this.ShowPassord
  }

}
