// import the Date

import { DateTime } from './luxon.js';

const liveTimeParent = document.getElementById('header');
const liveTime = document.createElement('time');
liveTimeParent.appendChild(liveTime);

const myLiveTime = () => {
  const myTime = DateTime.local();
  liveTime.innerHTML = myTime.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

setInterval(myLiveTime, 1000);

export default myLiveTime;