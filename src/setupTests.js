import React from 'react';
// eslint-disable-next-line import/no-named-as-default-member
React.useLayoutEffect = React.useEffect;
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });
