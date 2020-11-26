import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SecondComponent } from './second/second.component';
import { AppComponent} from './app.component'
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
    { path: '', component: FirstComponent},
    { path: 'first', component: FirstComponent},
    { path: 'second', component: SecondComponent },
    { path: '**', component: NotfoundComponent },
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }