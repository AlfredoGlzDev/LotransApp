import { Component, OnInit} from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-bitacora-viaje',
  templateUrl: './bitacora-viaje.component.html',
  styleUrls: ['./bitacora-viaje.component.scss']
})
export class BitacoraViajeComponent implements OnInit {


  constructor() {
    
   }

  ngOnInit() {

    }


    //@ViewChild('content') content: ElementRef;
    public generatePdf(){
      let f = [ 'First', 'Second', 'Third', 'The last one' ]
      var docDefinition = {
        background: 'simple text',
        watermark: { image: '../../../assets/images/LOGO_LOT.png', color: 'blue', opacity: 0.3, bold: true, italics: false },
        content: [
          {
            layout: 'lightHorizontalLines', // optional
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 1,
              widths: [ '*', 'auto', 100, '*' ],
      
              body: [
                f,
                [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
              ]
            }
          }
        ]
      };
      pdfMake.createPdf(docDefinition).open();
  // let doc = new jsPDF();
  // doc.setFontSize(40)
  // doc.text(35, 25, 'Paranyan loves jsPDF')
  // doc.save('test.pdf');

    }
  }
