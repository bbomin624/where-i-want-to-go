var Body = {
    setColor:function(color){
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        $('body').css('backgroundColor', color);
    }
  }

var Link = {
    setColor : function(color){
        $('a').css('color', color);
    }
}

function nightdaybutton(self){
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';

      Links.setColor('white');
    } else{
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';

      Links.setColor('black');
    }
}