// App.tsx
import React, { FormEvent, useState } from 'react';
import { Container, Paper, Typography, Grid, Button } from '@mui/material';
import { UserForm } from './UserForm';
import { AddressForm } from './AddressForm';
import { AccountForm } from './AccountForm';

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const steps = [
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
  }

  function back() {
    setCurrentStepIndex((i) => (i <= 0 ? i : i - 1));
  }

  const step = steps[currentStepIndex];

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
    alert('Successful Account Creation');
  }

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        style={{
          padding: '2rem',
          margin: '2rem auto',
          borderRadius: '.5rem',
          fontFamily: 'Arial',
        }}
      >
        <form onSubmit={onSubmit}>
          <div style={{ textAlign: 'right' }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
            {!isFirstStep && (
              <Button type="button" onClick={back}>
                Back
              </Button>
            )}
            <Button type="submit">{isLastStep ? 'Finish' : 'Next'}</Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
}

export default App;
