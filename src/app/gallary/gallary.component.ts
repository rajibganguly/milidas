import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  gallary = [
    {image: './../../assets/img/images/gallery1.jpg', text: 'শ্রীমতি উর্মিমালা বসুর সঙ্গে'},    
    {image: './../../assets/img/images/gallery3.jpg', text: 'রাজভবনে রাজ্যপাল কেশরী নাথ ত্রিপাঠির সঙ্গে'},
    {image: './../../assets/img/images/gallery4.jpg', text: 'বাচিক শিল্পী বিজয়লক্ষ্মী বর্মন এর সঙ্গে'},
    {image: './../../assets/img/images/gallery5.jpg', text: 'গায়ক প্রতুল মুখোপাধ্যায় এর সঙ্গে'},
    {image: './../../assets/img/images/gallery6.jpg', text: 'রাজ্যপাল কেশরী নাথ ত্রিপাঠির সঙ্গে'},
    {image: './../../assets/img/images/gallery7.jpg', text: 'লেখক দেবেশ রায় এর সঙ্গে'},
    {image: './../../assets/img/images/gallery8.jpg', text: 'জীবনানন্দ সভাঘর কবি সুবোধ সরকারের সঙ্গে প্রথম বই প্রকাশ অনুষ্ঠানে অপেক্ষা করছি বন্দি কফিনে মোড়ক উন্মোচন'},
    {image: './../../assets/img/images/gallery9.jpg', text: 'সাহিত্যিক শীর্ষেন্দু মুখোপাাধ্যযায় এর সঙ্গে'},
    {image: './../../assets/img/images/gallery10.jpg', text: 'নবনীতা দেবসেন এর সঙ্গে'},
    {image: './../../assets/img/images/gallery11.jpg', text: 'শীর্ষেন্দু মুখোপাধ্যায় এর সঙ্গে'},
    {image: './../../assets/img/images/gallery12.jpg', text: 'মন্ত্রী ব্রাত্য বসুর সঙ্গে'},
    {image: './../../assets/img/images/gallery13.jpg', text: 'নাট্যকার দেবশঙ্কর হালদার এর সঙ্গে'},
    {image: './../../assets/img/images/gallery14.jpg', text: 'শিল্পী যোগেন চৌধুরীর ও গায়ক কবির সুমন এর সঙ্গে'},
    {image: './../../assets/img/images/gallery15.jpg', text: 'বাচিক শিল্পী পার্থ মুখোপাধ্যায় এর সঙ্গে'},
    {image: './../../assets/img/images/gallery16.jpg', text: 'শীর্ষেন্দু মুখোপাধ্যায় এর বাড়িতে'},
    {image: './../../assets/img/images/gallery17.jpg', text: 'কবি শঙ্খ ঘোষ এর সঙ্গে'},
    {image: './../../assets/img/images/gallery18.jpg', text: 'শীর্ষেন্দু মুখোপাধ্যায় এর সঙ্গে'},
    {image: './../../assets/img/images/gallery19.jpg', text: 'শীর্ষেন্দু মুখোপাধ্যায় ও শঙ্খ ঘোষ এর সঙ্গে'},
    {image: './../../assets/img/images/gallery20.jpg', text: 'সাহিত্যিক সমরেশ মজুমদার ও সাহিত্যিক সঞ্জীব চট্টোপাধ্যায় এর সঙ্গে!'},
    {image: './../../assets/img/images/gallery21.jpg', text: 'সাহিত্যিক সঞ্জীব চট্টোপাধ্যায় এর সঙ্গে!'},
    {image: './../../assets/img/images/gallery22.jpg', text: 'With actor Raja Murad!'},
    {image: './../../assets/img/images/gallery23.jpg', text: 'শীর্ষেন্দু মুখোপাধ্যায় এর সঙ্গে!'},
    {image: './../../assets/img/images/gallery24.jpg', text: 'With  Linguist , Literary critic Pabitra Sarkar!'},
    {image: './../../assets/img/images/gallery25.jpg', text: 'With Minister Javed Ahmed Khan!'},
    {image: './../../assets/img/images/gallery26.jpg', text: 'With painter Wasim Kapoor and actor Prem Chopra!'},
    {image: './../../assets/img/images/gallery27.jpg', text: 'With reciter Bratati Bandopadhyay!'},
    {image: './../../assets/img/images/gallery28.jpg', text: 'Text not available!'},
    {image: './../../assets/img/images/gallery29.jpg', text: 'With Director Anindya Chatterjee!'},
    {image: './../../assets/img/images/gallery30.jpg', text: 'With Debsankar Sanjeeb chatterjee!'},
    {image: './../../assets/img/images/gallery31.jpg', text: 'Mili with actor Arindam Ganguly!'},
    {image: './../../assets/img/images/gallery32.jpg', text: 'With folk singer Lopamudra!'},
    {image: './../../assets/img/images/gallery33.jpg', text: 'নবনীতা দেবসেন এর সঙ্গে!'},
    {image: './../../assets/img/images/gallery34.jpg', text: 'Text not available!'},
    {image: './../../assets/img/images/gallery35.jpg', text: 'With doordarshan artist Jagannath Basu!'},
    {image: './../../assets/img/images/gallery36.jpg', text: 'With painter Wasim Kapoor and actor Prem Chopra!'},
    {image: './../../assets/img/images/gallery37.jpg', text: 'With Raja Murad!'},
    {image: './../../assets/img/images/gallery2.jpg', text: 'Text not available!'},
  ]


  constructor() { }

  ngOnInit() {
  }

}
