import React from 'react';
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,

  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
  
    span: 16,
  },
};
const RegistrationForm = () => {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case 'Express Exterier':
        form.setFieldsValue({
          note: 'Express Exterier',
        });
        return;
      case 'Oil Change':
        form.setFieldsValue({
          note: 'Oil Change',
        });
        return;
      case 'Auto Detail Wash':
        form.setFieldsValue({
          note: 'Auto Detail Wash',
        });
        return;
        case 'Preventative Services':
          form.setFieldsValue({
            note: 'Preventative Services',
          });

          return;
          case 'Complete Detail Wash':
            form.setFieldsValue({
              note: 'complete Detail Wash',
            });

            return;
            case 'Full Service':
              form.setFieldsValue({
                note: 'Full Service',
              });

        break;
      default:
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  return (
    <Form    layout="vertical" form={form} name="control-hooks" className='
    form d-column-flex align-items-center p-4  m-2 '
     onFinish={onFinish}>

<Form.Item
        name="Wash_Detail"
        label="Wash"
        rules={[
          {
            required: true,
          },
        ]}
      className ="justify-content-center input"

      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
          className='input'
        >
          <Option value="Express Exterier">Express Exterirer</Option>
          <Option value="Oil Change">Oil Change</Option>
          <Option value="Auto Detail Wash">Auto Detail Wash</Option>
          <Option value="Preventative Services">Preventative Services</Option>
          <Option value="Complete Detail Wash">complete Detail Wash</Option>
          <Option value="Full Service">Full Service</Option>
        </Select>
       
      </Form.Item>

      <Form.Item
        name="Your Name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
         <Input className='input'  />
         
      </Form.Item>


    
      <Form.Item
        name="Phone Number"
        label="Phone Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
         <Input className='input' />
         
      </Form.Item>
      
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeRequest"
              label="Customize Request"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      
      <Form.Item  >
        <div className='d-flex justify-content-center'>
        <Button type="botton" className='form-btn' htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
export default RegistrationForm;