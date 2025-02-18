const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
    {
        title: "Detective Conan",
        days: 18,
        hours: 11,
        minutes: 45
    }
  ];

  function logOutSeriesText(seriesDurations) {
    // write code here
    const minutesIn80Years = 525600 * 80;
    let total = 0;
    
    for(let i = 0; i < seriesDurations.length; i++){
        const title = seriesDurations[i].title;
        const days = seriesDurations[i].days;
        const hours = seriesDurations[i].hours;
        const minutes = seriesDurations[i].minutes;
        
        const convertedDaysInHours = days * 24 + hours;
        const convertedHoursInMinutes = convertedDaysInHours * 60 + minutes;

        const percentOfLife = convertedHoursInMinutes * 100 / minutesIn80Years;
        total += percentOfLife;
        console.log(title + ' took ' + percentOfLife.toFixed(3) + '% of my life');
    }
    console.log('In total that is ' + total.toFixed(3) + '% of my life')
  }
  
  console.log(logOutSeriesText(seriesDurations)); // logs out the text found above