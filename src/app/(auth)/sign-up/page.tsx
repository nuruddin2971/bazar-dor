"use client";

import { signIn, signUp } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { setPassword } from "better-auth/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log("data from the form", data);

    // if (data.password !== data.confirmPassword) {
    //   setPasswordError("পাসওয়ার্ড দুটি মিলছে না!");
    //   return;
    // }

    const { data: resData, error } = await signUp.email({
      name: data.name as string,
      email: data.email as string,
      password: data.password as string,
      // callbackURL: "/sign-in",
    });
    // console.log(resData, error);
    if (resData?.user.name) {
      toast.success("Account Created Successfully, Login to continue");
      router.push("/sign-in");
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await signIn.social({
      provider: "google",
    });
    // console.log(data);
  };
  const handleGitHubSignIn = async () => {
    const data = await signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8 bg-default-50">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-default-900 mb-1">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="text-sm text-default-500">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="w-full max-w-md bg-white border border-default-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextField
            isRequired
            name="name"
            type="text"
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm font-medium text-default-700">নাম</Label>
            <Input
              placeholder="যেমন: রহিম উদ্দিন"
              className="w-full h-11 px-3.5 rounded-xl border border-default-200 text-sm outline-none focus:border-[#05893E] transition-colors bg-default-50/50"
            />
            <FieldError className="text-xs text-danger" />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-sm font-medium text-default-700">
              ইমেইল
            </Label>
            <Input
              placeholder="you@example.com"
              className="w-full h-11 px-3.5 rounded-xl border border-default-200 text-sm outline-none focus:border-[#05893E] transition-colors bg-default-50/50"
            />
            <FieldError className="text-xs text-danger" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="flex flex-col gap-1.5"
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
            <Label className="text-sm font-medium text-default-700">
              পাসওয়ার্ড
            </Label>
            <Input
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full h-11 px-3.5 rounded-xl border border-default-200 text-sm outline-none focus:border-[#05893E] transition-colors bg-default-50/50"
            />
            <FieldError className="text-xs text-danger" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="confirmPassword"
            type="password"
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm font-medium text-default-700">
              পাসওয়ার্ড নিশ্চিত করুন
            </Label>
            <Input
              placeholder="আবার লিখুন"
              className="w-full h-11 px-3.5 rounded-xl border border-default-200 text-sm outline-none focus:border-[#05893E] transition-colors bg-default-50/50"
            />
            <FieldError className="text-xs text-danger" />
          </TextField>

          <Button
            type="submit"
            className="w-full h-11 bg-[#05893E] text-white font-medium rounded-xl mt-2 flex items-center justify-center gap-2 shadow-md"
          >
            অ্যাকাউন্ট তৈরি করুন
          </Button>
        </Form>

        <div className="flex items-center w-full my-6">
          <div className="flex-1 h-[1px] bg-gray-300" />
          <span className="px-3 text-xs text-default-400">অথবা</span>
          <div className="flex-1 h-[1px] bg-gray-300" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full h-11 flex items-center justify-center gap-2.5 rounded-xl border border-default-200 bg-white hover:bg-default-50 text-[#263028] font-medium text-sm transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Google দিয়ে চালিয়ে যান</span>
          </Button>

          <Button
            type="button"
            onClick={handleGitHubSignIn}
            className="w-full h-11 flex items-center justify-center gap-2.5 rounded-xl border border-default-200 bg-white hover:bg-default-50 text-[#263028] font-medium text-sm transition-colors"
          >
            <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub দিয়ে চালিয়ে যান</span>
          </Button>
        </div>

        <div className="text-center mt-6 text-sm text-default-600">
          অ্যাকাউন্ট আছে?
          <Link
            href="/signin"
            className="text-[#05893E] font-medium hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/"
          className="text-sm text-default-500 hover:text-default-800 transition-colors"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
