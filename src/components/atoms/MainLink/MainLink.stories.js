import React from 'react';
import {storiesOf} from '@storybook/react';
import MainLink from "./MainLink"


storiesOf("MainLink", module)
  .add("Primary", () => <MainLink>Hola</MainLink>)
  .add("Secondary", () => <MainLink secondary>World</MainLink>)




