import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { RouterModule } from '@angular/router';
import { SharedService } from '../shared/service/shared.service';
import { SharedModule } from '../shared/modules/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompleteComponent } from './components/complete/complete.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    SubMenuComponent,
    PageNotFoundComponent,
    CompleteComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, NavigationComponent, FooterComponent],
  providers: [SharedService],
})
export class CoreModule {}
