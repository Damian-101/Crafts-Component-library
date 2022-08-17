import React,{useState} from 'react';
import TextInputControl from '../../components/text-input-control/index';
import Doc from './docs/TextInputControl.mdx'

export default {
  component: TextInputControl,
  title: 'components/Text Input Control',
  parameters:{
    docs:{
      page:Doc
    }
  },
  argTypes:{
    label:{
        control:{type:'text'},
        description:'Label Of The Input Control',
        defaultValue: { summary: 'null' },
        type:{
          summary:'string',
        }
      },
      placeholder:{
        control:{type:'text'},
        description:'Placeholder Value',
        defaultValue: { summary: 'null' },
        type:{
          summary:'string',
        }
      },
      onChange:{
        control:{type:'null'},
        description:'On Input Value Change',
        defaultValue: { summary: 'null' },
        type:{
          summary:'function',
          detail:'return  values (event)'
        }
      },
      max:{
        control:{type:'number'},
        description:'Maximum Valid Amount Of Characters',
        defaultValue: { summary: 'null' },
        type:{
          summary:'number',
        }
      },
      required:{
        control:{type:'boolean'},
        description:'Is This Input Required',
        defaultValue: { summary: 'null' },
        type:{
          summary:'boolean',
        }
      },
    }
};

const Template = args => <TextInputControl {...args} />

export const Default = Template.bind({});
Default.args = {
  label:"User Name",
  placeholder:"Add Text Field",
  onChange:(value) => {
    console.log(value.target.value)
  },
  max:20,
  required:true
};


export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label:"User Name",
  placeholder:"Add Text Field",
  onChange:(value) => {
    console.log(value.target.value)
  },
  errMsg:"Can't Include Numbers Or Symbols",
  max:20,
  required:true,
  value:"JohnDoe120@$"
};