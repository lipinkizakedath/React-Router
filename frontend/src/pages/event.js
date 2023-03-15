import React from 'react';
import { json, useLoaderData } from 'react-router-dom';
import EventList from '../components/EventsList';

function Event() {
  const data = useLoaderData();
  const events = data.events;

  if (data.error) {
    return <p>{data.message}</p>;
  }
  return <EventList events={events} />;
}

export default Event;

export const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw json(
      {
        title: '500 Internal Error',
        message: 'Fetching failed!',
      },
      { status: 500 }
    );
  }
  return response;
};
