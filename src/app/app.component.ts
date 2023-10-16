import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sidebarVisible: boolean = false;
  sidebarVisible2: boolean = false;
  items: MegaMenuItem[] =[];

  ngOnInit() {
    this.items = [
      {
          label: 'دسته بندی',
          icon: 'pi pi-fw pi-video',
          items: [
              [
                  {
                      label: 'موبایل',
                      items: [{ label: 'آیفون' }, { label: 'شیایومی' }, { label: 'سامسونگ' },
                              { label: 'نوکیا' }, { label: 'آنر' }, { label: 'هواوی' }
                    ]
                  },
                  {
                      label: 'کامپیوتر و لپ تاپ',
                      items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                  }
              ],
              [
                  {
                      label: 'هدفون',
                      items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                  },
                  {
                      label: 'Video 4',
                      items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                  }
              ]
          ]
      },
      {
          label: 'پرفروش ترین ها',
          icon: 'pi pi-fw pi-users',
       
         
      },
  
    {
        label: '  تخفیف ها و پیشنهادها',
        icon: 'pi pi-fw pi-users',
     
       
    },
    //   {
    //       label: 'Events',
    //       icon: 'pi pi-fw pi-calendar',
    //       items: [
    //           [
    //               {
    //                   label: 'Event 1',
    //                   items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
    //               },
    //               {
    //                   label: 'Event 2',
    //                   items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
    //               }
    //           ],
    //           [
    //               {
    //                   label: 'Event 3',
    //                   items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
    //               },
    //               {
    //                   label: 'Event 4',
    //                   items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
    //               }
    //           ]
    //       ]
    //   },
  
  ];

  }
  title = 'phoneStore2';

}
