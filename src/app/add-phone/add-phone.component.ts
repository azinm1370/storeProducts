import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  formGroup!: FormGroup;
  value: string | undefined;
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      value: new FormControl(1234)
  });
  }

  // uploadedFiles: any[] = [];

  // constructor(private messageService: MessageService) {}

  // onUpload(event:any) {
  //     for(let file of event.files) {
  //         this.uploadedFiles.push(file);
  //     }

  //     this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  // }

}
