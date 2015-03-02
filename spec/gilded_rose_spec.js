describe("Gilded Rose", function() {

    beforeEach(function(){
        initItems();
    });

    describe('Items Quality', function() {
      it('Quality should decrease by 1', function() {
          updateQuality();
          expect(items[0].quality).toEqual(19);
      });

      it("Quality should degrade twice as fast if sell_in days < 0", function() {
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
      it('Conjured Items degrade quality twice as fast as normal items', function() {
        updateQuality();
      expect(items[5].quality).toEqual(4);
  });  
    });

  describe('Sell in', function() {
    it('Should decrease sell_in by 1 each day', function() {
        updateQuality();
        expect(items[0].sell_in).toEqual(9);
    });    
  });

  describe('Sulfuras', function() {
    it('Sulfuras never has to be sold', function() {
      updateQuality();
      expect(items[3].sell_in).toEqual(0);
    });

    it('Sulfuras never decrease quality', function() {
      updateQuality();
      expect(items[3].quality).toEqual(80);
    });  
  });
  
  describe('Backstage passes', function() {
    it('Backstage passes increases in quality as it\'s sell_in value decreases', function() {
      updateQuality();
      expect(items[4].quality).toEqual(21);
    });
    it('Backstage passes quality increases by 2 when there are 10 sell_in days or less ', function() {
      items[4].sell_in = 10;
      updateQuality();
      expect(items[4].quality).toEqual(22);
    });
    it('Backstage passes quality increase by 3 when 5 days or less in sell_in', function() {
      items[4].sell_in = 5;
      updateQuality();
      expect(items[4].quality).toEqual(23);      
    });
    it('Backstage passes quality drops 0 when sell_in <= 0', function() {
      items[4].sell_in = 0;
      updateQuality();
      expect(items[4].quality).toEqual(0);
    });
  });
});
