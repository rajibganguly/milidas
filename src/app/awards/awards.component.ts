import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
showModel = false;
newImage = '';
newText = '';
awards = [
    {
      image: "./../../assets/img/certificates/awards1.jpg",
      thumb: "./../../assets/img/certificates/awards1-nav.png",
      text: "2021 IQRA Foundation"
    },
    {
      image: "./../../assets/img/certificates/awards2.jpg",
      thumb: "./../../assets/img/certificates/awards2-nav.png",
      text: "2021 Poet of week - Your eyes"
    },
    {
      image: "./../../assets/img/certificates/awards3.jpg",
      thumb: "./../../assets/img/certificates/awards3-nav.png",
      text: "2022 Oxygen Pen"
    },
    {
      image: "./../../assets/img/certificates/awards4.jpg",
      thumb: "./../../assets/img/certificates/awards4-nav.png",
      text: "2020 International Online Cultural Festival"
    },
    {
      image: "./../../assets/img/certificates/awards5.jpg",
      thumb: "./../../assets/img/certificates/awards5-nav.png",
      text: "2021 Precious Gem"
    },
    {
      image: "./../../assets/img/certificates/awards6.jpg",
      thumb: "./../../assets/img/certificates/awards6-nav.png",
      text: "Association of Artists and Writers of the World"
    },
    {
      image: "./../../assets/img/certificates/awards7.jpg",
      thumb: "./../../assets/img/certificates/awards7-nav.png",
      text: "2021 World Library Forum"
    },
    {
      image: "./../../assets/img/certificates/awards8.jpg",
      thumb: "./../../assets/img/certificates/awards8-nav.png",
      text: "2021 Members Choice"
    },
    {
      image: "./../../assets/img/certificates/awards9.jpg",
      thumb: "./../../assets/img/certificates/awards9-nav.png",
      text: "2021 Poetry Centre"
    },
    {
      image: "./../../assets/img/certificates/awards10.jpg",
      thumb: "./../../assets/img/certificates/awards10-nav.png",
      text: "2021 Cping with COVID"
    },
    {
      image: "./../../assets/img/certificates/awards11.jpg",
      thumb: "./../../assets/img/certificates/awards11-nav.png",
      text: "2021 Cristian Camilo Serna Villada"
    },
    {
      image: "./../../assets/img/certificates/awards12.jpg",
      thumb: "./../../assets/img/certificates/awards12-nav.png",
      text: "2021 Mother Global Peace Award"
    },
    {
      image: "./../../assets/img/certificates/awards13.jpg",
      thumb: "./../../assets/img/certificates/awards13-nav.png",
      text: "All India poetess conference certificate, Karnataka"
    },
    {
      image: "./../../assets/img/certificates/awards14.jpg",
      thumb: "./../../assets/img/certificates/awards14-nav.png",
      text: "Certificate for Poetry from COLOMBIA"
    },
    {
      image: "./../../assets/img/certificates/awards15.jpg",
      thumb: "./../../assets/img/certificates/awards15-nav.png",
      text: "Certificate of HAVANA INTERNATIONAL POETRY FESTIVAL at Cuba on 25th May, 2021"
    },
    {
      image: "./../../assets/img/certificates/awards16.jpg",
      thumb: "./../../assets/img/certificates/awards16-nav.png",
      text: "সাহিত্যিক রামপদ চৌধুরী স্মরণে খোলাচিঠি মানপত্র"
    },
    {
      image: "./../../assets/img/certificates/awards17.jpg",
      thumb: "./../../assets/img/certificates/awards17-nav.png",
      text: "PRESIDENT OF INDIA (Association Of Artists And Writers Of The World SAPS)"
    },
    {
      image: "./../../assets/img/certificates/awards18.jpg",
      thumb: "./../../assets/img/certificates/awards18-nav.png",
      text: "Indo Universe Voice of Poetry"
    },
    {
      image: "./../../assets/img/certificates/awards19.jpg",
      thumb: "./../../assets/img/certificates/awards19-nav.png",
      text: "Certificate of commitment"
    },
    {
      image: "./../../assets/img/certificates/awards20.jpg",
      thumb: "./../../assets/img/certificates/awards20-nav.png",
      text: "School of Arts and Poetry"
    },
    {
      image: "./../../assets/img/certificates/awards21.jpg",
      thumb: "./../../assets/img/certificates/awards21-nav.png",
      text: "Dante Pera Garay"
    },
    {
      image: "./../../assets/img/certificates/awards22.jpg",
      thumb: "./../../assets/img/certificates/awards22-nav.png",
      text: "Every Child Lifeline"
    },
    {
      image: "./../../assets/img/certificates/awards23.jpg",
      thumb: "./../../assets/img/certificates/awards23-nav.png",
      text: "Poetry for Life"
    },
    {
      image: "./../../assets/img/certificates/awards24.jpg",
      thumb: "./../../assets/img/certificates/awards24-nav.png",
      text: "Peace and Love Inkers"
    },
    {
      image: "./../../assets/img/certificates/awards25.jpg",
      thumb: "./../../assets/img/certificates/awards25-nav.png",
      text: "Literary Creations Certificate of Achievement"
    },
    {
      image: "./../../assets/img/certificates/awards26.jpg",
      thumb: "./../../assets/img/certificates/awards26-nav.png",
      text: "PRESIDENT OF INDIA (Association Of Artists And Writers Of The World SAPS)"
    },
    {
      image: "./../../assets/img/certificates/awards27.jpg",
      thumb: "./../../assets/img/certificates/awards27-nav.png",
      text: "Litterateur Redefining World"
    },
    {
      image: "./../../assets/img/certificates/awards28.jpg",
      thumb: "./../../assets/img/certificates/awards28-nav.png",
      text: "Asom Bonga Moitri Sanmilan"
    },
    {
      image: "./../../assets/img/certificates/awards29.jpg",
      thumb: "./../../assets/img/certificates/awards29-nav.png",
      text: "Asom Bonga Moitri Sanmilan"
    },
    {
      image: "./../../assets/img/certificates/awards30.jpg",
      thumb: "./../../assets/img/certificates/awards30-nav.png",
      text: "Kolkata Alor Disha"
    },
    {
      image: "./../../assets/img/certificates/awards31.jpg",
      thumb: "./../../assets/img/certificates/awards31-nav.png",
      text: "সাহিত্য সৃষ্টি সম্মাননা পত্র"
    },
    {
      image: "./../../assets/img/certificates/awards32.jpg",
      thumb: "./../../assets/img/certificates/awards32-nav.png",
      text: "A poeta bilingue"
    },
    {
      image: "./../../assets/img/certificates/awards33.jpg",
      thumb: "./../../assets/img/certificates/awards33-nav.png",
      text: "INISA"
    },
    {
      image: "./../../assets/img/certificates/awards34.jpg",
      thumb: "./../../assets/img/certificates/awards34-nav.png",
      text: "INISA certificate"
    },
    {
      image: "./../../assets/img/certificates/awards35.jpg",
      thumb: "./../../assets/img/certificates/awards35-nav.png",
      text: "Prixton Church University"
    },
    {
      image: "./../../assets/img/certificates/awards36.jpg",
      thumb: "./../../assets/img/certificates/awards36-nav.png",
      text: "Groupo de Poesia"
    }
  ]


  constructor() { }

  ngOnInit() {
  }

  checkStand(ob) {
    this.showModel = true;
    this.newImage = ob.image;
    this.newText = ob.text;
  }

  close() {
    this.showModel = false;
  }

}
