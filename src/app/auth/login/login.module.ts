import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { SharedService } from '../../shared/service/shared.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
  providers: [SharedService],
})
export class LoginModule {}
