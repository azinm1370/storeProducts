import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  files!: TreeNode[];
  constructor( private messageService: MessageService) {}
  selectedFile!: TreeNode | null;
  ngOnInit() {

   // this.nodeService.getFiles().then((files) => (this.files = files));

    // this.items = [
    //     { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedFile) },
    //     { label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile() }
    // ];

      this.items = [
        {
            label: 'DASHBOARDS',
            icon: 'pi pi-fw pi-file',
           
            items: [
            
                {
                    label: 'E-Commerce ',
                    icon: 'pi pi-fw pi-home',
                    routerLink: '/E-CommerceDashboard',
                },
                {
                    label: 'Banking ',
                    icon: 'pi pi-fw pi-image',
                    routerLink: '/BankingDashboard',
                },
          
             
            ]
        },
          {
              label: 'List Phones',
              icon: 'pi pi-fw pi-pencil',
              routerLink: '/phones'
          },


      ];
  }
}
