import React, { Fragment } from 'react';
import InputWrapper from './InputWrapper';
import Label from './Label';
import Error from './Error';
import SelectWrapper from './SelectWrapper';
import Input from './Input';
import RadioGroup from './RadioGroup';
import CheckboxGroup from './CheckboxGroup';
import Select from 'react-select';

const VariableField = field => {
  switch (field.type) {
    case 'select':
      return (
        <InputWrapper>
          {field.multiple ? (
            <Fragment>
              <Label>{field.label}</Label>
              <Select
                name='tags'
                defaultValue={[]}
                isMulti
                options={field.options}
                onChange={field.input.onChange}
              />
            </Fragment>
          ) : (
            <Fragment>
              <Label>{field.label}</Label>
              {field.meta.touched && field.meta.error && (
                <Error>{field.meta.error}</Error>
              )}
              <SelectWrapper>
                <Input {...field.input} as='select' type='select'>
                  {field.children}
                </Input>
              </SelectWrapper>
            </Fragment>
          )}
        </InputWrapper>
      );

    case 'radiogroup':
      return (
        <InputWrapper>
          <RadioGroup field={field} />
        </InputWrapper>
      );

    case 'checkboxgroup':
      return (
        <InputWrapper>
          <CheckboxGroup field={field} />
        </InputWrapper>
      );

    case 'textarea':
      return (
        <InputWrapper>
          <Label>{field.label}</Label>
          {field.meta.touched && field.meta.error && (
            <Error>{field.meta.error}</Error>
          )}
          <Input
            {...field.input}
            as='textarea'
            rows='6'
            error={field.meta.touched && !!field.meta.error}
            placeholder={field.label}
          />
        </InputWrapper>
      );

    default:
      return (
        <InputWrapper>
          <Label>{field.label}</Label>
          {field.meta.touched && field.meta.error && (
            <Error>{field.meta.error}</Error>
          )}
          <Input
            {...field.input}
            error={field.meta.touched && !!field.meta.error}
            type={field.type}
            placeholder={field.label}
            autoComplete='off'
          />
        </InputWrapper>
      );
  }
};

const renderField = field => {
  return <VariableField {...field} />;
};

export default renderField;
