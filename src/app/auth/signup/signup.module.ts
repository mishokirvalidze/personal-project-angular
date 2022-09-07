import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './component/signup.component';
import { SignUpRoutingModule } from './signup-routing.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { SharedService } from '../../shared/service/shared.service';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, SignUpRoutingModule, SharedModule],
  providers: [SharedService],
})
export class SignupModule {}
