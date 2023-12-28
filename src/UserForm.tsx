// UserForm.tsx
import React from 'react';
import { TextField, Typography, Grid } from '@mui/material';

type UserFormProps = {
  firstName: string;
  lastName: string;
  age: string;
  updateFields: (fields: Partial<{ firstName: string; lastName: string; age: string }>) => void;
};

export function UserForm({ firstName, lastName, age, updateFields }: UserFormProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <Typography variant="h6" gutterBottom>
        User Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoFocus
            label="First Name"
            required
            type="text"
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Last Name"
            required
            type="text"
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Age"
            required
            type="number"
            value={age}
            onChange={(e) => updateFields({ age: e.target.value })}
          />
        </Grid>
      </Grid>
    </div>
  );
}
