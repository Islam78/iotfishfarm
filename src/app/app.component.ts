import { Component } from '@angular/core';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]

})
export class AppComponent {
  title = 'FishFarm';
  constructor(private translatr: TranslateService) {
    translatr.addLangs(['en', 'ar'])
    translatr.setDefaultLang('en')
  }

}
