import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Formik, Form, Field } from 'formik';
import { Button, Welcome } from '@storybook/react/demo';
import { BaseRadio } from '../src/components/Forms/Base';
import { InputGroup } from '../src/components/Forms/FormGroups';
import ExampleForm from '../src/components/Forms/FormikForms/ExampleForm';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Forms', module)
  .add('Input', () => (
    <ExampleForm
      initValues={{ Firstname: '', LastName: '', FavoriteColor: '' }}
    />
  ))
  .add('Radio', () => (
    <Formik
      initialValues={{ name: 'Tony' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={values => (
        <Form>
          <Field
            id="MyRadio"
            label="MyRadioLabel"
            name="name"
            component={BaseRadio}
          />
        </Form>
      )}
    />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

// storiesOf('Pickers', module)
//   .add('DateTime', () => <DatePickers />);
