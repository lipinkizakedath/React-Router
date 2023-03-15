// Challenge / Exercise

import Home from './pages/home';
import Event from './pages/event';
import EventDetail from './pages/eventDetail';
import NewEvent, { action as newEvent } from './pages/newEvent';
import EditEvent from './pages/editEvent';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root';
import EventsRoot from './pages/eventsRoot';
import { loadEvents } from './pages/event';
import { loadEventDetail } from './pages/eventDetail';
import Error from './pages/Error';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <Event />,
            loader: loadEvents,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: loadEventDetail,
            children: [
              {
                index: true,
                element: <EventDetail />,
              },
              { path: 'edit', element: <EditEvent /> },
            ],
          },
          { path: 'new', element: <NewEvent />, action: newEvent },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
