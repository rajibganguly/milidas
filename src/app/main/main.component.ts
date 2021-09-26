import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 
miliText1 = `Mili Das is a bilingual poet and writer from Kolkata, West Bengal, India. 
She is a symbol that no obstacle in life can hold anyone back. She is a eminent recipe writer of West Bengal and abroad. She attended  
various Television programs on national as well as local Television channels.`
miliText2 = `
She is invited as a judge of various cooking competitions. She herself is the inspiration of her own life.  Her poetry 
proves her wiring style is of a completely different genre which is completely her own, doesn't match with anyone.`;

listsOfBooks = [
  {
    image: './../../assets/img/books/opakha_korchi_bondi_kofine.jpg',
    text: '',
    action: 'read more'
  },
  {
    image: './../../assets/img/books/rajbhobaner_samne.jpg',
    text: '',
    action: 'read more'
  },
  {
    image: './../../assets/img/books/you_are_still_there.jpg',
    text: '',
    action: 'read more'
  },
  {
    image: './../../assets/img/books/never_broken.jpg',
    text: '',
    action: 'read more'
  }
]
  constructor() { }

  ngOnInit() {
  }

}
