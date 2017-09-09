import eventMapper from './eventMapper';
import eventData from '../data/events.json';

it('maps correctly', () => {
  const mappedEvents = eventMapper(eventData, new Date(2017, 0, 1, 9, 0, 0));
  expect(eventData.length).toBe(2);
  expect(mappedEvents.length).toBe(6);
  expect(mappedEvents[0].title).toBe('Jeff');
  expect(mappedEvents[3].title).toBe('Lucy');
  expect(mappedEvents[0].start).toEqual(new Date(2017, 0, 1, 10, 0, 0, 0));
  expect(mappedEvents[0].end).toEqual(new Date(2017, 0, 1, 11, 0, 0, 0));
});
