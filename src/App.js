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
      eventData,
    };
  }
  render() {
    return (
      <div className='App'>
        <BigCalendar
          {...this.props}
          events={this.state.eventData}
          views={['day', 'month']}
          defaultDate={new Date(2015, 3, 1)}
        />
      </div>
    );
  }
}

export default App;
