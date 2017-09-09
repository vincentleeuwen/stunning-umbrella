import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import eventData from './data/events.json';
import eventMapper from './utils/eventMapper';
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
      mappedEvents: [],
    };
  }
  componentWillMount() {
    this.setState({
      mappedEvents: eventMapper(this.state.eventData, this.state.baseDate),
    });
  }
  eventStyleGetter(event) {
    const style = {
      backgroundColor: event.hexColor,
      borderColor: event.hexColor,
    };
    return {
      style,
    };
  }
  render() {
    return (
      <div className='App'>
        <BigCalendar
          {...this.props}
          events={this.state.mappedEvents}
          views={['day', 'month']}
          defaultDate={this.state.baseDate}
          eventPropGetter={this.eventStyleGetter}
        />
      </div>
    );
  }
}

export default App;
