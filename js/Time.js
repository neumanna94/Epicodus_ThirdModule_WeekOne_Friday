export class Time {
  constructor (inputTime, lifeExpect){
    this.then = inputTime;
    this.now = new Date();
    this.lifeExpectancy = lifeExpect;

  }
  ThenToSeconds(){
    return this.then.getTime()/1000;
  }
  NowToSeconds(){
    return this.now.getTime()/1000;
  }
  NowToThenDifferenceSeconds(){
    return (this.now.getTime() - this.then.getTime())/1000;
  }
  HumanAgeOnEarth(){
    return this.NowToThenDifferenceSeconds()*(1/60)*(1/60)*(1/24)*(1/365.25);
  }
  HumanAgeOnMercury(){
    //Second -> Minute -> Hour -> Day -> Year -> Conversion Factor for Planet.
    return this.NowToThenDifferenceSeconds()*(1/60)*(1/60)*(1/24)*(1/365.25)*(1/.24);
  }
  HumanAgeOnVenus(){
    //Second -> Minute -> Hour -> Day -> Year -> Conversion Factor for Planet.
    return this.NowToThenDifferenceSeconds()*(1/60)*(1/60)*(1/24)*(1/365.25)*(1/.62);
  }
  HumanAgeOnMars(){
    //Second -> Minute -> Hour -> Day -> Year -> Conversion Factor for Planet.
    return this.NowToThenDifferenceSeconds()*(1/60)*(1/60)*(1/24)*(1/365.25)*(1/1.88);
  }
  HumanAgeOnJupiter(){
    //Second -> Minute -> Hour -> Day -> Year -> Conversion Factor for Planet.
    return this.NowToThenDifferenceSeconds()*(1/60)*(1/60)*(1/24)*(1/365.25)*(1/11.86);
  }
  IntegerYearToSeconds(inputYear){
    //Second -> Minute -> Hour -> Day -> Year -> Conversion Factor for Planet.
    return inputYear*365.25*24*60*60;//Year*(days/Year)(hours/day)(minutes/hour)(seconds/minute)
  }
  SimpleLifeExpectancyGenerator(){
    return this.lifeExpectancy - this.NowToThenDifferenceSeconds()*(1/60)*(1/60)*(1/24)*(1/365.25);
  }
  CheckExceedLifeExpectancy(){
    if(this.SimpleLifeExpectancyGenerator() < 0){
      return true;
    } else {
      return false;
    }
  }
  CheckLifeExpectancyForDifferentPlanet(inputConversionFactor){
    return this.SimpleLifeExpectancyGenerator()*(1/inputConversionFactor);
  }
}
