"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Page() {
  const router = useRouter();

  // Refs for input fields
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  // State for form values and errors
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "First name required";
    if (!form.lastName.trim()) errs.lastName = "Last name required";
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!/^\d{10,}$/.test(form.phone)) errs.phone = "Invalid phone";
    return errs;
  };

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  // Handle Enter key for focus management
  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter" && nextRef && nextRef.current) {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      router.push("/");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 6,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 2,
        background: "#fff",
      }}
    >
      <Typography variant="h5" mb={2}>
        Sign Up
      </Typography>
      <div style={{ marginBottom: 16 }}>
        <label>
          First Name
          <br />
          <input
            ref={firstNameRef}
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
            style={{
              width: "100%",
              padding: 8,
              border: errors.firstName ? "2px solid #f44336" : "1px solid #ccc",
              borderRadius: 4,
              outline: "none",
              marginTop: 4,
            }}
            autoFocus
          />
        </label>
        {errors.firstName && (
          <Typography color="error" variant="caption">
            {errors.firstName}
          </Typography>
        )}
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>
          Last Name
          <br />
          <input
            ref={lastNameRef}
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, emailRef)}
            style={{
              width: "100%",
              padding: 8,
              border: errors.lastName ? "2px solid #f44336" : "1px solid #ccc",
              borderRadius: 4,
              outline: "none",
              marginTop: 4,
            }}
          />
        </label>
        {errors.lastName && (
          <Typography color="error" variant="caption">
            {errors.lastName}
          </Typography>
        )}
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>
          Email
          <br />
          <input
            ref={emailRef}
            name="email"
            value={form.email}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, phoneRef)}
            style={{
              width: "100%",
              padding: 8,
              border: errors.email ? "2px solid #f44336" : "1px solid #ccc",
              borderRadius: 4,
              outline: "none",
              marginTop: 4,
            }}
            type="email"
          />
        </label>
        {errors.email && (
          <Typography color="error" variant="caption">
            {errors.email}
          </Typography>
        )}
      </div>
      <div style={{ marginBottom: 24 }}>
        <label>
          Phone Number
          <br />
          <input
            ref={phoneRef}
            name="phone"
            value={form.phone}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: 8,
              border: errors.phone ? "2px solid #f44336" : "1px solid #ccc",
              borderRadius: 4,
              outline: "none",
              marginTop: 4,
            }}
            type="tel"
          />
        </label>
        {errors.phone && (
          <Typography color="error" variant="caption">
            {errors.phone}
          </Typography>
        )}
      </div>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign Up
      </Button>
    </Box>
  );
}
