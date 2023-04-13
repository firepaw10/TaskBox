import React from 'react';
import Avatar from './avatar';

export default {
  component: Avatar,
  title: 'Avatar',
  // decorators: <avatar type="profile" text="GF" icon="fa-solid fa-arrow-right-to-bracket">,
};

const Template = args => <Avatar {...args} />;
export const threeCharName = Template.bind({});
threeCharName.args = {
  avatar: {
    type: 'button',
    className: 'avatar',
    text: 'GNF',
    width: '10%',
  },
};

export const twoCharName = Template.bind({});
twoCharName.args = {
  avatar: {
    type: 'button',
    className: 'avatar',
    text: 'GF',
    width: '10%',
  },
};

export const oneCharName = Template.bind({});
oneCharName.args = {
  avatar: {
    type: 'button',
    className: 'avatar',
    text: 'H',
    width: '10%',
  },
};
