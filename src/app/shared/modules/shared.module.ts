import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  exports: [ReactiveFormsModule, HttpClientModule, RouterModule],
})
export class SharedModule {}
