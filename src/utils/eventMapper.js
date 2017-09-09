import moment from 'moment';

const eventMapper = (eventData, baseDate) => {
  const mappedEvents = [];
  eventData.forEach((eventObj) => {
    const eventOwner = eventObj.name;
    eventObj.events.forEach((event) => {
      const newEvent = {
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
