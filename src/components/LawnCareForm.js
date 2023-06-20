import React, { useState } from "react";
import styled from "styled-components";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const FormContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55vh;
`;

const StyledForm = styled.form`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const LawnCareForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    serviceRequested: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <FormContainer container>
      <Grid item xs={12}>
        <StyledForm onSubmit={handleSubmit}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            CONTACT US
          </Typography>
          <StyledTextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            style={{ marginTop: "5px" }}
          />
          <StyledTextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            variant="outlined"
            style={{ marginTop: "5px" }}
          />
          <StyledTextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            variant="outlined"
            style={{ marginTop: "5px" }}
          />
          <FormControl
            fullWidth
            variant="outlined"
            style={{ marginTop: "2px" }}
          >
            <InputLabel id="service-requested-label">
              Service Requested
            </InputLabel>
            <Select
              labelId="service-requested-label"
              id="service-requested"
              name="serviceRequested"
              value={formData.serviceRequested}
              onChange={handleChange}
              label="Service Requested"
              style={{ margin: "5px 0" }}
            >
              <MenuItem value="">Select Service</MenuItem>
              <MenuItem value="Lawn Mowed & Maintenance">Lawn Mowed</MenuItem>
              <MenuItem value="Custom Landscape Design">
                Custom Landscape Design
              </MenuItem>
              <MenuItem value="Tree Trimming & Edging">
                Tree Trimming & Edging
              </MenuItem>
              <MenuItem value="Leaf Removal & Clean-up">
                Leaf Removal & Clean-up
              </MenuItem>
              <MenuItem value="Aeration, Seeding & Sod installation">
                Aeration, Seeding & Sod installation
              </MenuItem>
              <MenuItem value="Lawn Mowed Maintenance Program">
                Lawn Mowed Maintenance Program
              </MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </StyledForm>
      </Grid>
    </FormContainer>
  );
};

export default LawnCareForm;
