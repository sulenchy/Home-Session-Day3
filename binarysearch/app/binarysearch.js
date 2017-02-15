const newArray = {
  
  toTwenty(){
    for (var i=1;i<=20;i++) {
      this.push(i);
    }
    return this;
  },
  
  toForty() {
    for (var i=2;i<=40;i++) {
      if (i%2 === 0) {
        this.push(i);
      }
    }
    return this;
  },
  
  toOneThousand() {
    for (var i=1;i<=1000;i++) {
      if (i%10 === 0) {
        this.push(i);
      }
    }
    return this;
  },
  
  search(num){
    var length = this.length;
    var lengthOriginal = this.length;
    var startPosition;
    var index;
    var count = 0;
    var show = {};
    show.length = lengthOriginal;
    for (startPosition = 0;startPosition <= lengthOriginal; startPosition++) {
        index = Math.floor(((length - 1) + startPosition) / 2); //trying to get the middle index
        count++;    //to count the number of times the iteration occured
        if (num > this[length - 1]) {
          show.index = -1;
          show.count = -1;
          return show;
        }
        else if (num === this[length - 1]) {
          show.index = length-1;
          show.count = count -1;
          return show;
        }
        else if (num === this[0]) {
          show.index = index;
          show.count = -1;
          return show;
        }
        else if (num < this[index]) {
          length = index - 1;
        }
        else if (num > this[index]) {
            startPosition = index + 1;
        }
        else {
          show.index = index;
      show.count = count-1;
      return show;
        }
    }
}
};
Object.assign(Array.prototype, newArray);