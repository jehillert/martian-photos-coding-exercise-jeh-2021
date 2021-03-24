import React, { Suspense } from 'react';

import 'app/theme';

import Loading from 'app/components/Loading';

const App = () => <Suspense fallback={<Loading />}> wait </Suspense>;

export default App;
