import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

// import eventData from './data/events.json';
import eventData from './data/sampleEvents';
import './App.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment),
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baseDate: new Date(2017, 0, 1, 9, 0, 0),
      eventData,
      sampleEventData,
      parsedEvents: [],
    };
  }
  componentWillMount() {
    const parsedEvents = [];
    this.state.eventData.forEach((eventObj) => {
      const eventOwner = eventObj.name;
      eventObj.events.forEach((event) => {
        const newEvent = {
          title: eventOwner,
          start: moment(this.state.baseDate).add(event.day, 'days').add(event.start, 'minutes').toDate(),
          end: moment(this.state.baseDate).add(event.day, 'days').add(event.end, 'minutes').toDate(),
        };
        parsedEvents.push(newEvent);
      });
    });
    console.log(5555);
    console.log(parsedEvents);
    this.setState({
      parsedEvents,
    });
  }
  render() {
    return (
      <div className='App'>
        <BigCalendar
          {...this.props}
          events={this.state.parsedEvents}
          views={['day', 'month']}
          defaultDate={this.state.baseDate}
        />
      </div>
    );
  }
}

export default App;
