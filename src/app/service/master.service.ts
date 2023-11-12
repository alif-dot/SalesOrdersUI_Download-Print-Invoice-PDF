import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  
  // GenerateInvoiceDocx(invoiceno:any){
  //   return this.http.get('https://localhost:7420/api/Invoice/generatepdf?InvoiceNo='+invoiceno,{observe:'response',responseType:'blob'});
    
  // }

  GetCustomer() {
    return this.http.get('https://localhost:7420/api/Customer/GetAll')
  }

  GetCustomerbycode(code: any) {
    return this.http.get('https://localhost:7420/api/Customer/GetByCode?Code='+code);
  }
  GetProducts() {
    return this.http.get('https://localhost:7420/api/Product/GetAll');
  }
  GetProductbycode(code: any) {
    return this.http.get('https://localhost:7420/api/Product/GetByCode?Code='+code);
  }

  GetAllInvoice():Observable<any[]>{
    return this.http.get<any[]>('https://localhost:7420/api/Invoice/GetAllHeader');
  }

  GetInvHeaderbycode(invoiceno:any){
    return this.http.get('https://localhost:7420/api/Invoice/GetAllHeaderbyCode?invoiceno='+invoiceno);
  }
  GetInvDetailbycode(invoiceno:any){
    return this.http.get('https://localhost:7420/api/Invoice/GetAllDetailbyCode?invoiceno='+invoiceno);
  }
  RemoveInvoice(invoiceno:any){
    return this.http.delete('https://localhost:7420/api/Invoice/Remove?invoiceno='+invoiceno);
  }

  SaveInvoice(invoicedata:any){
    return this.http.post('https://localhost:7420/api/Invoice/Save',invoicedata);
  }

  GenerateInvoicePDF(invoiceno:any){
    return this.http.get('https://localhost:7420/api/Invoice/generatepdf?InvoiceNo='+invoiceno,{observe:'response',responseType:'blob'});
    
  }
}
