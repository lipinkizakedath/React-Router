import React from 'react';
import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetails() {
  const data = useRouteLoaderData('event-detail');
  return <EventItem event={data.event} />;
}

export default EventDetails;

export const loadEventDetail = async ({ request, params }) => {
  const id = params.eventId;
  const resp = await fetch('http://localhost:8080/events/' + id);
  if (!resp.ok) {
    throw json(
      { message: 'Failed to fetech the event item', title: 'Error occured!' },
      { status: 500 }
    );
  }
  return resp;
};

export const action = async ({ params, request }) => {
  const resp = await fetch('http://localhost:8080/events/' + params.eventId, {
    method: request.method,
  });

  if (!resp.ok) {
    throw json(
      { message: 'Failed to fetech the event item', title: 'Error occured!' },
      { status: 500 }
    );
  }

  return redirect('/events');
};
