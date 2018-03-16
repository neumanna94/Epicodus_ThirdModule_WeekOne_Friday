import { Time } from './../js/Time.js';
describe('Time', function() {
  const thenDate;
  const nowDate;
  const newTime;
  beforeEach(function() {
    thenDate = new Date('December 17, 1995 03:24:00');
    nowDate = new Date();
    newTime = new Time(thenDate);
  });
  it('Test Constructor', function() {
    expect(newTime.then).toEqual(thenDate);
    expect(newTime.now).toEqual(nowDate);
  });
  it('Check IntegerYearToSeconds', function() {
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
});
