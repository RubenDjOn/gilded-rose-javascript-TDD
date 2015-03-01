describe("Gilded Rose", function() {

    beforeEach(function(){
        initItems();
    });

  it('quality should decrease by 1', function() {
      updateQuality();
      expect(items[0].quality).toEqual(19);
  });

  it("quality should degrade twice as fast if sell_in days < 0", function() {
    items[0].sell_in = -1;    
    updateQuality();    
    expect(items[0].quality).toEqual(18);
  });

  it('The quality of an item is never negative', function() {
      items[0].sell_in = 0;
      items[0].quality = 0;      
      updateQuality();       
      expect(items[0].quality).toEqual(0);
  });
  it('Aged Brie increases in quality the older it gets', function() {
      updateQuality();
      expect(items[1].quality).toEqual(1);
  });
  it('The quality of an item is never more than 50', function() {
    items[1].quality = 50;
    updateQuality();
    expect(items[1].quality).toEqual(50);
      
  });
  it('should decrease sell_in by 1 each day', function() {
      updateQuality();
      expect(items[0].sell_in).toEqual(9);
  });
  //"Sulfuras", being a legendary item, never has to be sold nor does it decrease in quality
  it('Sulfuras never has to be sold', function() {
    updateQuality();
    expect(items[3].sell_in).toEqual(0);
  });

  it('Sulfuras never decrease quality', function() {
    updateQuality();
    expect(items[3].quality).toEqual(80);
  });

  it('Backstage passes increases in quality as it\'s sell_in value decreases', function() {
    updateQuality();
    expect(items[4].quality).toEqual(21);
  });
  it('Backstage passes quality increases by 2 when there are 10 sell_in days or less ', function() {
    items[4].sell_in = 10;
    updateQuality();
    expect(items[4].quality).toEqual(22);
  });

  /*
    and by 3 when there are 5 days or less but quality drops to 0 after the concert
    "Conjured" items degrade in quality twice as fast as normal items
  */
});
