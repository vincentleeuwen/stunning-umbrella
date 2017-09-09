import moment from 'moment';

const colors = ['#FFD129', '#95AE39', '#D42E20', '#6FCCD4', '#F7913C'];

const eventMapper = (eventData, baseDate) => {
  const mappedEvents = [];
  let eventIndex = 0;
  eventData.forEach((eventObj) => {
    const eventOwner = eventObj.name;
    const eventColor = colors[eventIndex]; // naive implementation for now
    eventIndex += 1;
    eventObj.events.forEach((event) => {
      const newEvent = {
        hexColor: eventColor,
        title: eventOwner,
        start: moment(baseDate).add(event.day, 'days').add(event.start, 'minutes').toDate(),
        end: moment(baseDate).add(event.day, 'days').add(event.end, 'minutes').toDate(),
      };
      mappedEvents.push(newEvent);
    });
  });
  return mappedEvents;
};

export default eventMapper;
