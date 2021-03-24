import React, { Suspense } from 'react';
import AppWrapper from './AppWrapper';
import 'app/theme';

import Loading from 'app/components/Loading';

const App = () => (
  <AppWrapper>
    <Suspense fallback={<Loading />}> wait </Suspense>
  </AppWrapper>
);

export default App;
