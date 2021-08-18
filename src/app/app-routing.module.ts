import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromeventComponent } from './fromevent/fromevent.component';
const routes: Routes = [{ path: 'formevent', component: FromeventComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
