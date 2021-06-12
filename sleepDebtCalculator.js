const getSleepHours = day => {
    if ( day === 'monday') {
      return 8;
     } 
    };

    const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

    const getIdealSleepHours = idealHours =>
      idealHours * 7;

    const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours(); 

    const idealSleepHours =
    getIdealSleepHours(8);
      
      if (actualSleepHours === idealSleepHours){
       console.log('You have the perfect amount of sleep!');
      } else if (idealSleepHours > actualSleepHours) {
       console.log('You got ' + 
      (idealSleepHours - actualSleepHours) + ' hour(s) more sleep, You have more sleep than needed!');
      } else { console.log('you got ' + 
      (idealSleepHours - actualSleepHours ) + ' hour(s) less sleep, You should get some rest!');} 
     };
    calculateSleepDebt();
    
