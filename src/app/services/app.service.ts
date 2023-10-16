import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

import { switchMap } from 'rxjs/internal/operators/switchMap';
import { of } from 'rxjs/internal/observable/of';
import { Product } from '../model/Product';
import { CartList } from '../model/Cart.DataSource';
import { ProductList } from '../model/Product.DataSource';
import { PhoneList } from '../model/Phone.DataSource';
import { Phone } from '../model/Phone';
import { Cart } from '../model/Cart';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _selectedProduct: BehaviorSubject<Product | null>;

//  private _selectedProduct: BehaviorSubject<Product | null> =
   //  new BehaviorSubject(null);
  //   private _selectedExecutiveRequestPerson: BehaviorSubject<ExecutiveRequestPerson> =
  //       new BehaviorSubject(null);
  //   private _selectedExecutiveRequestRelatedPerson: BehaviorSubject<ExecutiveRequestRelatedPerson> =
  //       new BehaviorSubject(null);
   //private _selectedExecutiveRequestDocument: BehaviorSubject<ExecutiveRequestDocument> =
  //   new BehaviorSubject(null);
  //   private _selectedExecutiveRequestBindingSubject: BehaviorSubject<ExecutiveRequestBindingSubject> =
  //       new BehaviorSubject(null);
  //   private _selectedPersonEditMode: BehaviorSubject<boolean> =
  //       new BehaviorSubject(false);

   get selectedProduct$(): Observable<Product | null> {
    return this._selectedProduct.asObservable();
 }
set selectedProduct(value: Product) {
    this._selectedProduct.next(value);
}
//   get loadExecutiveRequestForm$(): Observable<boolean> {
//     return this._loadExecutiveRequestForm.asObservable();
// }
// set loadExecutiveRequestForm(value: boolean) {
//     this._loadExecutiveRequestForm.next(value);
// }

// get validateExecutiveRequestForm$(): Observable<boolean> {
//     return this._validateExecutiveRequestForm.asObservable();
// }
// set validateExecutiveRequestForm(value: boolean) {
//     this._validateExecutiveRequestForm.next(value);
// }

// get validateSelectedPerson$(): Observable<boolean> {
//     return this._validateSelectedPerson.asObservable();
// }
  getPhoneList():Observable<Phone[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(PhoneList);
  }
  getProductList():Observable<Product[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(ProductList);
  }
  
  getCartList():Observable<Cart[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(CartList);
  }

//   getExecutiveRequestDocumentDataById(
//     executiveRequestId,
//     executiveRequestDocumentId
// ): Observable<any> {
//     return this._httpClient
//         .get(
//             this._baseUrl +
//                 'GetExecutiveRequestDocument/' +
//                 executiveRequestId +
//                 '/' +
//                 executiveRequestDocumentId
//         )
//         .pipe(
//             switchMap((response: any) => {
//                 this.selectedExecutiveRequestDocument = Object.assign(
//                     {},
//                     response.data
//                 );

//                 this.selectedDocumentEditMode = true;

//                 return of(response);
//             })
//         );
// }
// mapToExecutiveRequest(
//   executiveRequest: ExecutiveRequest
// ): ExecutiveRequest {
//   let selectedExecutiveRequest: ExecutiveRequest = new ExecutiveRequest(
//       false,
//       false,
//       true,
//       false,
//       false,
//       false,
//       executiveRequest?.executiveRequestDocuments,
//       executiveRequest?.executiveRequestBindingSubjects,
//       executiveRequest?.executiveRequestPersons,
//       executiveRequest?.executiveRequestRelatedPersons,
//       executiveRequest?.executiveRequestNo,
//       executiveRequest?.executiveRequestPaperCount,
//       executiveRequest?.executiveRequestFactorNo,
//       executiveRequest?.executiveRequestFactorDate,
//       executiveRequest?.executiveRequestDate,
//       executiveRequest?.executiveRequestState,
//       executiveRequest?.isCorrectiveOfAnotherReq,
//       executiveRequest?.executiveRequestTitle,
//       executiveRequest?.executiveRequestSumPrice,
//       executiveRequest?.iSExecutiveRequestFinalVerification,
//       executiveRequest?.isExecutiveRequestPayCostConfirmed,
//       executiveRequest?.executiveRequestPaymentType,
//       executiveRequest?.executiveRequestTypeId,
//       executiveRequest?.executiveRequestUnitId,
//       executiveRequest?.executiveRequestReason,
//       executiveRequest?.executiveRequestCurrencyTypeId,
//       executiveRequest?.executiveRequestNotaryDescription,
//       executiveRequest?.executiveRequestUnitDescription,
//       executiveRequest?.executiveRequestDigitalSign,
//       executiveRequest?.executiveRequestDigitalSignDN,
//       executiveRequest?.executiveRequestText,
//       executiveRequest?.executiveRequestPrice,
//       executiveRequest?.executiveRequestBillNo,
//       executiveRequest?.receiptNo,
//       executiveRequest?.payCostDate,
//       executiveRequest?.payCostTime,
//       executiveRequest?.executiveRequestHowToPay,
//       executiveRequest?.executiveRequestModifier,
//       executiveRequest?.executiveRequestModifyDate,
//       executiveRequest?.executiveRequestModifyTime,
//       executiveRequest?.sardaftarNameFamily,
//       executiveRequest?.sardaftarConfirmDate,
//       executiveRequest?.sardaftarConfirmTime,
//       executiveRequest?.executiveRequestScriptoriumId,
//       executiveRequest?.executiveRequestId,
  
//   );

//   //map childs:
//   if (selectedExecutiveRequest.executiveRequestPersons != null) {
//       selectedExecutiveRequest.executiveRequestPersons =
//           selectedExecutiveRequest.executiveRequestPersons.map(
//               (executiveRequestPerson) => {
//                   return this.mapToExecutiveRequestPerson(
//                       executiveRequestPerson
//                   );
//               }
//           );
//   } else {
//       selectedExecutiveRequest.executiveRequestPersons = [];
//   }

//   if (selectedExecutiveRequest.executiveRequestRelatedPersons != null) {
//       selectedExecutiveRequest.executiveRequestRelatedPersons =
//           selectedExecutiveRequest.executiveRequestRelatedPersons.map(
//               (executiveRequestRelatedPerson) => {
//                   return this.mapToExecutiveRequestRelatedPerson(
//                       executiveRequestRelatedPerson
//                   );
//               }
//           );
//   } else {
//       selectedExecutiveRequest.executiveRequestRelatedPersons = [];
//   }

//   if (selectedExecutiveRequest.executiveRequestDocuments != null) {
//       selectedExecutiveRequest.executiveRequestDocuments =
//           selectedExecutiveRequest.executiveRequestDocuments.map(
//               (executiveRequestDocument) => {
//                   return this.mapToExecutiveRequestDocument(
//                       executiveRequestDocument
//                   );
//               }
//           );
//   } else {
//       selectedExecutiveRequest.executiveRequestDocuments = [];
//   }

//   if (selectedExecutiveRequest.executiveRequestBindingSubjects != null) {
//       selectedExecutiveRequest.executiveRequestBindingSubjects =
//           selectedExecutiveRequest.executiveRequestBindingSubjects.map(
//               (executiveRequestBindingSubject) => {
//                   return this.mapToExecutiveRequestBindingSubject(
//                       executiveRequestBindingSubject
//                   );
//               }
//           );
//   } else {
//       selectedExecutiveRequest.executiveRequestBindingSubjects = [];
//   }

//   return selectedExecutiveRequest;
// }

// mapToExecutiveRequestPerson(
//   executiveRequestPerson: ExecutiveRequestPerson
// ): ExecutiveRequestPerson {
//   let selectedExecutiveRequestPerson: ExecutiveRequestPerson =
//       new ExecutiveRequestPerson(
//           false,
//           false,
//           true,
//           false,
//           false,
//           false,
//           executiveRequestPerson?.rowNo,
//           executiveRequestPerson?.isPersonSabteAhvalChecked,
//           executiveRequestPerson?.isPersonSabteAhvalCorrect,
//           executiveRequestPerson?.personId,
//           executiveRequestPerson?.personSabtahvalInquiryDate,
//           executiveRequestPerson?.personSabtahvalInquiryTime,
//           executiveRequestPerson?.isPersonFingerprintGotten,
//           executiveRequestPerson?.personHasSana,
//           executiveRequestPerson?.personSanaInquiryDate,
//           executiveRequestPerson?.personSanaInquiryTime,
//           executiveRequestPerson?.personSanaOrganizationName,
//           executiveRequestPerson?.personSanaOrganizationCode,
//           executiveRequestPerson?.personSanaMobileNo,
//           executiveRequestPerson?.personSanaHasOrganizationChart,
//           executiveRequestPerson?.personFax,
//           executiveRequestPerson?.executionRequestId,
//           executiveRequestPerson?.personNationalNo,
//           executiveRequestPerson?.personBirthDate,
//           executiveRequestPerson?.personName,
//           executiveRequestPerson?.personFamily,
//           executiveRequestPerson?.personFatherName,
//           executiveRequestPerson?.personIdentityNo,
//           executiveRequestPerson?.personIdentityIssueLocation,
//           executiveRequestPerson?.personIdentitySeri,
//           executiveRequestPerson?.personIdentitySerial,
//           executiveRequestPerson?.personPostalCode,
//           executiveRequestPerson?.personMobileNo,
//           executiveRequestPerson?.personAddress,
//           executiveRequestPerson?.personAddressTypeId,
//           executiveRequestPerson?.personAddressTypeTitle,
//           executiveRequestPerson?.personTel,
//           executiveRequestPerson?.personEmail,
//           executiveRequestPerson?.personDescription,
//           executiveRequestPerson?.scriptoriumId,
//           executiveRequestPerson?.personSexType,
//           executiveRequestPerson?.personBirthLocation,
//           executiveRequestPerson?.personNationalityId,
//           executiveRequestPerson?.personPostTypeId,
//           executiveRequestPerson?.executiveRequestPersonType,
//           executiveRequestPerson?.isPersonRelated,
//           executiveRequestPerson?.isPersonSanaChecked,
//           executiveRequestPerson?.personMobileNoStat,
//           executiveRequestPerson?.isPersonAlive,
//           executiveRequestPerson?.isPersonOriginal,
//           executiveRequestPerson?.isPersonIranian,
//           executiveRequestPerson?.personalImage,
//           executiveRequestPerson?.personIdentityAlphabetSeri,
//          // executiveRequestPerson?.personNationality,
//           executiveRequestPerson?.personPassportNo,
//           executiveRequestPerson?.personCompanyType,
//           executiveRequestPerson?.personCompanyRegisterLocation,
//           executiveRequestPerson?.personCompanyRegisterNo,
//         //  executiveRequestPerson?.personLegalPersonType,
//           executiveRequestPerson?.personCompanyRegisterDate,
//           executiveRequestPerson?.personLastLegalPaperNo,
//           executiveRequestPerson?.personLastLegalPaperDate,
//           executiveRequestPerson?.legalPersonNatureId,
//           executiveRequestPerson?.legalPersonTypeId
//       );

//   return selectedExecutiveRequestPerson;
// }
 }
