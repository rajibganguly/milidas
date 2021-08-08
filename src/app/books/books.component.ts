import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

// import * as data from './../../assets/data/books.json';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  hideDetails: boolean = true;
  currentBooks;
  title: string;
  // books:[];

  books = [
    {
      id: 1,
      image: './../../assets/img/books/opakha_korchi_bondi_kofine.jpg',
      name: 'অপেক্ষা করছি বন্দি কফিনে',
      text: 'কমলিনী প্রকাশন বিভাগ, ১৩ বংকিম চ্যাটার্জী স্ট্রিট, কলকাতা - ৭০০০৭৩',
      action: 'read more',
      details: [
        {
          image: './../../assets/img/books/book-details/akbk1.jpg', 
          text: 'Text not available!'
        },
        {
          image: './../../assets/img/books/book-details/akbk2.jpg', 
          text: 'Text not available!'
        },
        {
          image: './../../assets/img/books/book-details/akbk3.jpg', 
          text: 'Text not available!'
        }
      ]
    },
    {
      id: 2,
      image: './../../assets/img/books/rajbhobaner_samne.jpg',
      name: 'রাজভবনের সামনে',
      text: 'কর্পোরেট পাবলিসিটি, বসিরহাট - ৭৪৩৪১১, উঁ ২৪ পরগনা থেকে প্রকাশিত ও মুদ্রিত ',
      action: 'read more',
      details: [
        {
          image: './../../assets/img/books/book-details/rs1.jpg', 
          text: 'Text not available!'
        },
        {
          image: './../../assets/img/books/book-details/rs2.jpg', 
          text: 'Text not available!'
        }
      ]
    },
    {
      id: 3,
      image: './../../assets/img/books/you_are_still_there.jpg',
      name: 'You Are Still There',
      text: 'Munir Mezyed Foundation, International Publication Foundation, 58 Calea Severinului St. Craiova, Dolj, Romania',
      action: 'read more',
      details: [
        {
          image: './../../assets/img/books/book-details/you_are_still_there1.jpg', 
          text: 'Text not available!'
        },
        {
          image: './../../assets/img/books/book-details/you_are_still_there2.jpg', 
          text: 'Text not available!'
        },
        {
          image: './../../assets/img/books/book-details/you_are_still_there3.jpg', 
          text: 'Text not available!'
        },
        {
          image: './../../assets/img/books/book-details/you_are_still_there4.jpg', 
          text: 'Text not available!'
        }
      ]
    },
    {
      id: 4,
      image: './../../assets/img/books/never_broken.jpg',
      name: 'Never Broken',
      text: 'Third Eye Butterfly Press, Orlando, Florida USA',
      action: 'read more',
      details: [
        {
          image: './../../assets/img/books/book-details/never_broken1.jpg', 
          text: 'Text not available!'
        },
        {
          image: './../../assets/img/books/book-details/never_broken2.jpg', 
          text: 'Text not available!'
        },
        {
          image: './../../assets/img/books/book-details/never_broken3.jpg', 
          text: 'Text not available!'
        },
        {
          image: './../../assets/img/books/book-details/never_broken4.jpg', 
          text: 'Text not available!'
        },
        {
          image: './../../assets/img/books/book-details/never_broken5.jpg', 
          text: 'Text not available!'
        },
        {
          image: './../../assets/img/books/book-details/never_broken6.jpg', 
          text: 'Text not available!'
        }
      ]
    }
  ]

  

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    const allBooks = this.authorService.getPublishedBooks();
    console.log(allBooks);
  }

  clickedBook(ded: number) {
    console.log(this.hideDetails);
    this.hideDetails = false;
    this.currentBooks = [];
    this.books.filter((x) => {
      if(x.id == ded) {
        this.title = x.name;
        this.currentBooks = x.details
      }
    });
    console.log(this.currentBooks);
  }

  returnBack() {
    this.hideDetails = true;
    this.currentBooks = [];
  }

}
