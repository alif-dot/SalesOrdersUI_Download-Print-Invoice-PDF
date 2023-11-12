import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
import { ListingComponent } from './listing/listing.component';
import { RatingComponent } from './rating/rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'
import {DataTablesModule} from 'angular-datatables'

// import 'ngx-extended-pdf-viewer/assets/pdf.js';
// import 'ngx-extended-pdf-viewer/assets/pdf.worker.js';
// import 'ngx-extended-pdf-viewer/assets/viewer.js';


@NgModule({
  declarations: [
    AppComponent,
    CreateinvoiceComponent,
    ListingComponent,
    RatingComponent
  ],
  imports: [
   AppRoutingModule,
   BrowserModule,
   ReactiveFormsModule,
   HttpClientModule,
   ToastrModule.forRoot(),
   NgbModule,
   NgxExtendedPdfViewerModule,
   DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
