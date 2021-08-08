import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  showModel = false;
  newImage = '';
  recipes = [
    {
      id: 1,
      image: './../../assets/img/recipe/ZEE_BANGLA_RANNAGHAR.jpg',
      text: 'Zee Bangla RANNAGHAR'
    },
    {
      id: 2,
      image: './../../assets/img/recipe/AKASH_AATH_RADHUNI.jpg',
      text: 'আকাশ ৮ রাঁধুনি'
    },
    {
      id: 3,
      image: './../../assets/img/recipe/ARTAGE_NEWS_ER_RANNAGHAR.jpg',
      text: 'ARTAGE News Er রান্নাঘর'
    },
    {
      id: 4,
      image: './../../assets/img/recipe/ONKAR_NEWS_TV_RANNAGHAR.jpg',
      text: 'ওঙ্কার নিউস TV রান্নাঘর'
    },
    {
      id: 5,
      image: './../../assets/img/recipe/RONGEEN_TV_KHUDE_RANNA_BATI.jpg',
      text: 'রঙ্গীন TV খুদেদের-রান্না-বাটী '
    },
    {
      id: 6,
      image: './../../assets/img/recipe/STAR_JALSHA_RANNA_BANNA.jpg',
      text: 'ষ্টার জলসা রান্নাঘর'
    },
    {
      id: 7,
      image: './../../assets/img/recipe/ZEAL_TV_RANNAGHAR.jpg',
      text: 'Citi TV রান্নাঘর'
    },
    {
      id: 8,
      image: './../../assets/img/recipe/HANGLA_HESSEL.jpg',
      text: 'হ্যাংলা হেঁসেল'
    },
    {
      id: 9,
      image: './../../assets/img/recipe/BIGFM_92_7.jpg',
      text: 'BIG FM 92.7 Award'
    },
    {
      id: 10,
      image: './../../assets/img/recipe/BIGFM_92_7_2.jpg',
      text: 'BIG FM 92.7 Award'
    },
    {
      id: 11,
      image: './../../assets/img/recipe/PANCHOBANJON.jpg',
      text: 'পঞ্চবাঞ্জন সেরা গিন্নি বিচারকের ভূমিকায়'
    },
    {
      id: 12,
      image: './../../assets/img/recipe/PANCHOBANJON2.jpg',
      text: 'পঞ্চবাঞ্জন সেরা গিন্নি বিচারকের ভূমিকায়'
    },
    {
      id: 13,
      image: './../../assets/img/recipe/NAIHATI_SHILPAMELA.jpg',
      text: 'নৈহাটী শিল্পমেলা অনুষ্ঠানে সঙ্গে সুদিপা চ্যাটার্জী'
    },
    {
      id: 14,
      image: './../../assets/img/recipe/FOOD_FIESTA.jpg',
      text: 'FOOD Fiesta'
    },
    {
      id: 15,
      image: './../../assets/img/recipe/WITH_POLITICIAN.jpg',
      text: 'বিশিষ্ট ব্যক্তিদের সাথে মিলি দাস '
    },
    {
      id: 15,
      image: './../../assets/img/recipe/ME_RECIPE2.jpg',
      text: 'যোধপুর পার্ক রান্নার প্রতিযোগিতা'
    }


  ];

  listsOfPaperCutting = [
    {
      image: './../../assets/img/paper_cuttings/20210807_204600.jpg',
      thumbnail: './../../assets/img/paper_cuttings/news-cutting.png',
    },
    {
      image: './../../assets/img/paper_cuttings/20210807_211149.jpg',
      thumbnail: './../../assets/img/paper_cuttings/news-cutting.png',
    },
    {
      image: './../../assets/img/paper_cuttings/20210808_114523.jpg',
      thumbnail: './../../assets/img/paper_cuttings/news-cutting.png',
    },
    {
      image: './../../assets/img/paper_cuttings/20210808_114715.jpg',
      thumbnail: './../../assets/img/paper_cuttings/news-cutting.png',
    },
    {
      image: './../../assets/img/paper_cuttings/20210808_115855.jpg',
      thumbnail: './../../assets/img/paper_cuttings/news-cutting.png',
    }
  ]
  constructor() { }

  ngOnInit() {
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
