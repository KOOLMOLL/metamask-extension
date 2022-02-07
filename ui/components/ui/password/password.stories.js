import React from 'react';
import Password from '.';

export default {
  title: 'Components/UI/Password',
  id: __filename,
  component: Password,
  argTypes: {
    clearClipboardOnPaste: { control: 'boolean' },
    password: { control: 'text' },
    placeholder: { control: 'text' },
    onPasswordChange: { action: 'onChange' },
    showPassword: { control: 'boolean' },
  },
  args: {
    password: '',
  },
};

const Template = (args) => <Password {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.storyName = 'Default';
