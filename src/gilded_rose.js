function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var MIN_QUALITY = 0;
var MAX_QUALITY = 50;

var items = [];

function initItems(){
  items = [];
  items.push(new Item('+5 Dexterity Vest', 10, 20));
  items.push(new Item('Aged Brie', 2, 0));
  items.push(new Item('Elixir of the Mongoose', 5, 7));
  items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(new Item('Conjured Mana Cake', 3, 6));  
}


function updateQuality(itemName){
  items.forEach(function(item){
    if (itemChanges(item)) {
      item.quality = increaseQuality(item.name) ? qualityToIncrease(item) : qualityToDecrease(item);
      item.quality = qualityLessThan0(item.quality) ? MIN_QUALITY : item.quality;
      item.quality = qualityMoreThan50(item.quality) ? MAX_QUALITY : item.quality;  
      
      item.sell_in -= 1;
    }
  });
}

function itemChanges(item){
  return (item.name!='Sulfuras, Hand of Ragnaros');
}

function qualityLessThan0(itemQuality){
  return itemQuality < MIN_QUALITY;
}

function qualityMoreThan50(itemQuality){
  return itemQuality > MAX_QUALITY;
}

function increaseQuality(itemName){
  return (itemName=='Aged Brie'||itemName=='Backstage passes to a TAFKAL80ETC concert');
}

function qualityToIncrease(item){
  var quality = item.quality + 1;
  if (item.name=='Backstage passes to a TAFKAL80ETC concert') {    
    if(item.sell_in<=0){
      quality = 0;
    }
    else if (item.sell_in<=5){
      quality +=2;  
    }
    else if(item.sell_in<=10){
      quality +=1;
    }    
  }  
  return quality;
}

function qualityToDecrease(item){
  var quality = item.name=='Conjured Mana Cake' ? 2 : 1;   
  quality = (item.sell_in<0) ? quality*2 : quality;  
  return (item.quality - quality);
}
