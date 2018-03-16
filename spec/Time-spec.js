import { Time } from './../js/Time.js';
describe('Time', function() {
  var thenDate;
  var nowDate;
  var newTime;
  beforeEach(function() {
    thenDate = new Date('December 17, 1995 03:24:00');
    nowDate = new Date();
    newTime = new Time(thenDate);
  });
  it('Test Constructor', function() {
    expect(Math.round(newTime.then.getSeconds())).toEqual(Math.round(thenDate.getSeconds()));
    expect(Math.round(newTime.now.getSeconds()).toEqual(Math.round(nowDate.getSeconds()));
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
  it('Check SimpleLifeExpectancyGenerator() for 1001 cases.', function() {
    let age;
    for(var i = 0; i <= 1000; i ++){
      age = i;
      expect(newTime.SimpleLifeExpectancyGenerator(i)).toEqual(i - (newTime.NowToThenDifferenceSeconds())*(1/60)*(1/60)*(1/24)*(1/365.25));
    }
  });
  it('Check CheckExceedLifeExpectancy() for 100 cases.', function() {
    //Doesn't exceed life expectancy. Age is 22 years old. i = life expectancy.
    for(var i = 50; i <= 500; i ++){
      expect(newTime.CheckExceedLifeExpectancy(i)).toEqual(false);
    }
    ////Exceeds. Age is 22 years old. i = life expectancy.
    for(var i = 1; i <= 22; i ++){
      expect(newTime.CheckExceedLifeExpectancy(i)).toEqual(true);
    }
  });
});
