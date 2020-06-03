import React from 'react';
import {storiesOf} from '@storybook/react';
import Link from './Link';


storiesOf('Link', module)
.add('Primary', () => <Link>Hola</Link>)
.add('Secondary', () => <Link secondary>World</Link>);




