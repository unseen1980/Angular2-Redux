import { Component } from '@angular/core';
import {PaxComponent} from './pax.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [PaxComponent]
})
export class AppComponent {
  title = 'app works!';
}
