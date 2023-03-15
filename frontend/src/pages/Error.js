import React from 'react';
import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function Error() {
  const error = useRouteError();
  const res = error.data;

  let title = 'Something went wrong!';
  let message = 'An error occured!';

  if (res?.title) {
    title = res.title;
  }

  if (res?.message) {
    message = res.message;
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default Error;
