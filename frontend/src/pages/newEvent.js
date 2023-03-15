import React from 'react';
import { json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

function NewEvent() {
  return <EventForm />;
}

export default NewEvent;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const newEventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const resp = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEventData),
  });

  if (!resp.ok) {
    throw json({ message: 'Submiting failed!' }, { status: 500 });
  }
  return redirect('/events');
};