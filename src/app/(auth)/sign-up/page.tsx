"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { RxDividerHorizontal } from "react-icons/rx";

export default function SignUpPage() {
  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>নাম</Label>
          <Input placeholder="যেমন: রহিম উদ্দিন" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>ইমেইল</Label>
          <Input placeholder="your@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>পাসওয়ার্ড</Label>
          <Input placeholder="কমপক্ষে ৮ অক্ষর" />

          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
          <Input placeholder="আবার লিখুন" />

          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            অ্যাকাউন্ট তৈরি করুন
          </Button>
          {/* <Button type="reset" variant="secondary">
          Reset
        </Button> */}
        </div>
      </Form>

      <div className="flex items-center">
        <RxDividerHorizontal className="flex-1" />
        <span className="px-4 text-small text-default-400">অথবা</span>
        <RxDividerHorizontal className="flex-1" />
      </div>
    </div>
  );
}
