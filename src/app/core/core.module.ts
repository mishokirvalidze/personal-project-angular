import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    SubMenuComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, NavigationComponent, FooterComponent],
})
export class CoreModule {}
