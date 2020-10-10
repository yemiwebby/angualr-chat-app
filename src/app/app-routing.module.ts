import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactScreenComponent } from 'src/lib/cometchat-angular-ui-kit/src/lib/contact-screen/contact-screen.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'chat-view',
    component: ContactScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
