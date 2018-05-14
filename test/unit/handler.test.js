import { graphqlHandler, playgroundHandler } from '../../handler';
import test from 'ava';

test('graphqlHandler should be a function', t => 
  t.is(typeof graphqlHandler, 'function')
);

test('playgroundHandler should be a function', t => 
  t.is(typeof playgroundHandler,'function')
);
