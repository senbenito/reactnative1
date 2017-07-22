import React from 'react';
import { StackNavigator } from 'react-navigation';

import Start from './components/Start';
import Amount from './components/Amount';
import Confirm from './components/Confirm';
import Thankyou from './components/Thankyou';


export const Root = StackNavigator({
  Start: {
    screen: Start,
  },
  Amount: {
    screen: Amount,
  },
  Confirm: {
    screen: Confirm,
  },
  Thankyou: {
    screen: Thankyou,
  },
})
