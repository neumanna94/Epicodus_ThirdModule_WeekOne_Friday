import { Time } from './../js/Time.js';
describe('Time', function() {
  var thenDate;
  var nowDate;
  var newTime;
  beforeEach(function() {
    thenDate = new Date('December 17, 1995 03:24:00');
    nowDate = new Date();
    newTime = new Time(thenDate, 70);
  });
  it('Test Constructor', function() {
    expect(Math.round(newTime.then.getSeconds())).toEqual(Math.round(thenDate.getSeconds()));
    expect(Math.round(newTime.now.getSeconds())).toEqual(Math.round(nowDate.getSeconds()));
  });
  it('Check IntegerYearToSeconds for 100 cases.', function() {
    for(var i = 0; i < 100; i ++){
      // console.log(i + " Years to Seconds, " + newTime.IntegerYearToSeconds(i) + ".");
      expect(newTime.IntegerYearToSeconds(i)).toEqual(i*365.25*24*60*60);
    }
  });
  it('Check ThenToSeconds()', function() {
    expect(newTime.NowToThenDifferenceSeconds()).not.toEqual(nowDate.getSeconds() - thenDate.getSeconds());
  });
  it('Check NowToSeconds()', function() {
    expect(newTime.NowToSeconds()).toEqual(nowDate.getTime()/1000);
  });
  it('Check CheckExceedLifeExpectancy() for 100 cases.', function() {
    //Doesn't exceed life expectancy. Age is 22 years old. i = life expectancy.
    for(var i = 50; i <= 500; i ++){
      newTime = new Time(thenDate, i);
      expect(newTime.CheckExceedLifeExpectancy()).toEqual(false);
    }
    ////Exceeds. Age is 22 years old. i = life expectancy.
    for(var i = 1; i <= 22; i ++){
      newTime = new Time(thenDate, i);
      expect(newTime.CheckExceedLifeExpectancy()).toEqual(true);
    }
  });
  it('Check CheckLifeExpectancyForDifferentPlanet', function() {
      let conversionFactors = [.24, .62, 1.88, 11.86];
      for(var i = 0; i < 4; i ++){
        expect(newTime.CheckLifeExpectancyForDifferentPlanet(conversionFactors[i])).toEqual(newTime.SimpleLifeExpectancyGenerator()*(1/conversionFactors[i]));
      }
  });
});
