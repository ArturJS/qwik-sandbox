/** @jsxImportSource react */

import { useState } from 'react';
import { qwikify$ } from '@builder.io/qwik-react';

// qwikify$() takes a react component and returns
// a Qwik component that delivers zero JS
export const MUIButton = qwikify$(() => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Hello from React +1</button>
      &emsp;
      {count}
    </div>
  );
});
