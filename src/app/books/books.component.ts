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
  showModel = false;
  newImage = '';
  // books:[];
  anthology = [
    {
      image: './../../assets/img/anthology/anthology_100.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_102.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_103.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_104.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_105.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_106.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_107.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_108.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_109.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_110.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    }
  ]
  anthologyAmerica = [
    {
      image: './../../assets/img/anthology/anthology_200.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_201.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_202.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_203.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_204.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    },
    {
      image: './../../assets/img/anthology/anthology_205.jpg',
      thumbnail: './../../assets/img/anthology/anthology.png',
    }
  ]
  books = [
    {
      id: 1,
      image: './../../assets/img/books/opakha_korchi_bondi_kofine.jpg',
      name: '????????????????????? ???????????? ??????????????? ???????????????',
      text: '?????????????????? ????????????????????? ???????????????, ?????? ??????????????? ?????????????????????????????? ?????????????????????, ?????????????????? - ??????????????????',
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
      name: '???????????????????????? ???????????????',
      text: '???????????????????????? ???????????????????????????, ????????????????????? - ??????????????????, ?????? ?????? ??????????????? ???????????? ???????????????????????? ??? ????????????????????? ',
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

  checkStand(ob) {
    console.log(ob);
    this.showModel = true;
    this.newImage = ob.image;
  }

  close() {
    this.showModel = false;
  }

}
