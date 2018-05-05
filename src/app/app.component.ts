import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Cards Demo';
  cardObj: any = [];
  cardArr: any = [];
  deck: any = [
    {
      name: 'club',
      sname: 'C',
      order: 1,
      num: 13
    },
    {
      name: 'diamond',
      sname: 'D',
      order: 2,
      num: 13
    },
    {
      name: 'heart',
      sname: 'H',
      order: 3,
      num: 13
    },
    {
      name: 'spade',
      sname: 'S',
      order: 4,
      num: 13
    }
];

  ngOnInit() {

    for (let j = 0 ; j < this.deck.length; j++) {
        const cardType = this.deck[j];
        for (let i = 1 ; i <= cardType.num; i++) {
          const cardrank  = 'rank' + i;
          // const newCard = '<div class="card ' + cardType.name + ' ' + cardrank + '"> </div>';
          // this.cardObj[cardType.sname].push(newCard);
          this.cardObj.push({'name' : cardType.name , 'sname' : cardType.sname, 'rank': i});
        }
      }
      this.cardArr = this.cardObj;
    }

  sortCards(direction) {
    this.cardArr = [];
    const typeLength = this.cardObj.length / this.deck.length;
    let index = 0;
    for (let i = 1 ; i <= typeLength; i++) {
      index = i;
      if (direction === 'desc') {
        index = 14 - i;
      }
      const result = this.cardObj.filter(card => card.rank === index);
      this.cardArr = this.cardArr.concat(result);
    }
  }

  sortByType(sortType) {
    this.cardArr = [];
    const sortArr = sortType.split('-');
    for (let i = 0 ; i < sortArr.length; i++) {
      const result = this.cardObj.filter(card => card.sname === sortArr[i]);
      this.cardArr = this.cardArr.concat(result);
      console.log(this.cardArr);
    }
  }

  shuffle () {
    const tmpArr = this.cardObj;
    let ctr = this.cardObj.length;
    let temp;
    while (ctr > 0) {
      const index = Math.floor(Math.random() * ctr);
      ctr--;
      // swap the last element with it
      temp = tmpArr[ctr];
      tmpArr[ctr] = tmpArr[index];
      tmpArr[index] = temp;
    }
    this.cardArr = tmpArr;
  }

  /*deleteCard (abc) {
    console.log(abc);
    if (this.cardArr[index]) {
      this.cardArr.splice(index, 1);
    }
  }*/
}
