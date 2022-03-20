// this computes a sinusoidal curve from midnight to midnight, oscillating between 5 and 6 mmol/l
// var fs = require('fs');
module.exports = function() {
    if (!Date.now) {
        Date.now = function() {
            return new Date().getTime();
        };
    }
    //timestamp in milliseconds;
    console.log('timestamp in milliseconds', Date.now());

    // timestamp in days;
    console.log('timestamp in days', Date.now() / 86400000);

    // timestamp in days rounded;
    console.log('timestamp in days rounded', Math.floor(Date.now() / 86400000));

    //timestamp in fraction of a day;
    console.log('timestamp in fraction of a day', (Date.now() / 86400000) - (Math.floor(Date.now() / 86400000)));

    //fraction of a day in hours;
    console.log('fraction of a day in hours', ((Date.now() / 86400000) - (Math.floor(Date.now() / 86400000))) * 24);

    //fraction of a day in hours adding 2 for UTC+2;
    console.log('fraction of a day in hours adding 2 for UTC+2', (((Date.now() / 86400000) - (Math.floor(Date.now() / 86400000))) * 24) + 2);

    // time of the day in hours - decimals, not minutes
    const hours = ((((Date.now() / 86400000) - (Math.floor(Date.now() / 86400000))) * 24) + 2);
    console.log('time of the day in hours - using decimals, not minutes: ', hours.toFixed(2));

    // express minutes also;
    const hoursAbs = Math.floor(hours);
    const minutes = (hours - hoursAbs) * 60;
    console.log('express minutes in minutes also:', minutes.toFixed(), 'minutes');

    // time of the day in 2 pi cycle;
    const daycycle = ((hours * Math.PI) / 12);
    console.log('time of the day in 2 pi cycle', daycycle.toFixed(2));

    // time of the day in 360 deg cycle;
    const dayCycleDeg = ((hours * 360) / 24);
    console.log('time of the day in 360 deg cycle', dayCycleDeg.toFixed(2));

    // value of the sin function according to hours, oscillating from -1 to +1;
    const SIN = Math.sin(dayCycleDeg * Math.PI / 180);
    console.log('value of the sin function according to hours, oscillating from -1 to +1: ', SIN.toFixed(2));

    // value of the sin function oscillating between 0 and 2;
    const sinInterm = (Math.sin(dayCycleDeg * Math.PI / 180) + 1);
    console.log('value of the sin function oscillating between 0 and 2: ', sinInterm.toFixed(2));





    //==========================================================================================
    // value of the sin function oscillating around 1, +/- 20 %
    //==========================================================================================
    const sinFunction = (Math.sin(dayCycleDeg * Math.PI / 180));
    const sinCorr = (sinFunction / 5) + 1;
    console.log('value of the sin function oscillating around 1, +/- 20 %, starting from 1 and ending in 1: ', sinCorr.toFixed(2));
    console.log('When the time of day is ' + hours.toFixed() + ' hours and ' + minutes.toFixed() + ' minutes, the sinusoidal value is: ' + sinCorr.toFixed(3));



    //==========================================================================================
    // value of the cos function oscillating around 1, +/- 20 %
    //==========================================================================================
    const cosinFunction = (Math.cos(dayCycleDeg * Math.PI / 180));
    const COScorr = (cosinFunction / 5) + 1;
    console.log('value of the cos function oscillating around 1, +/- 0.5, starting from 1.5 and ending in 1.5: : ', COScorr.toFixed(2));
    console.log('When the time of day is ' + hours.toFixed() + ' hours and ' + minutes.toFixed() + ' minutes, the cosinusoidal value is: ' + COScorr.toFixed(3));


    //==========================================================================================
    // make the json file
    //==========================================================================================

    const sinCurves = {
        sinus: sinCorr,
        cosinus: COScorr
    };
    
    return sinCurves;
};