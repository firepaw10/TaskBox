import React from 'react';
import Avatar from './avatar';

// import { rest } from 'msw';

export default {
  component: Avatar,
  title: 'Avatar',
  type: 'button',
  className: 'button',
  // decorators: <avatar type="profile" text="GF" icon="fa-solid fa-arrow-right-to-bracket">,
};

const Template = args => <Avatar {...args} />;
export const threeCharName = Template.bind({});
threeCharName.args = {
  avatar: {
    type: 'button',
    className: 'avatar',
    title: 'Test Task',
    text: 'GNF',
    width: '10%'
  },
};

export const twoCharName = Template.bind({});
twoCharName.args = {
  avatar: {
    type: 'button',
    className: 'avatar',
    title: 'Test Task',
    text: 'GF',
    width: '10%'
  },
};

export const oneCharName = Template.bind({});
oneCharName.args = {
  avatar: {
    type: 'button',
    className: 'avatar',
    title: 'Test Task',
    text: 'H',
    width: '10%'
  },
};
