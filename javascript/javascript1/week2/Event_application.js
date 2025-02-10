
function getEventWeekday(/*daysLeft*/){

    //If using parameters, so just comment line bellow
    //and line with document.getElement....innerText
    //and uncomment daysLeft parameter and the calls of the function
    const daysLeft = parseInt(document.getElementById('days-to-event').value, 10);

    const now = new Date();
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todaysWeekday = now.getDay();

    let eventsDay = todaysWeekday + daysLeft;
    while(eventsDay > daysOfWeek.length-1){
        eventsDay -= 7;
    }

    document.getElementById('eventsDay').innerText='Event will be on ' + daysOfWeek[eventsDay];
    console.log(todaysWeekday, daysOfWeek[eventsDay]);

}

//getEventWeekday(9);
//getEventWeekday(2);