import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FaceSnapsRoutingModule } from './face-snaps-routing.module';

import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [    
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
    FaceSnapComponent,
    FaceSnapListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FaceSnapsRoutingModule
  ],
  exports: [
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
    FaceSnapComponent,
    FaceSnapListComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ]
})
export class FaceSnapsModule { }
