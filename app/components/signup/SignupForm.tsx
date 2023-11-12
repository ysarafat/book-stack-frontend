"use client";
import { useSignUpMutation } from "@/lib/redux/features/auth/authApi";
import { Spinner, TextInput } from "keep-react";
import { Envelope, EyeSlash, Lock, User } from "phosphor-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword?: string;
};
export const SignUpForm = () => {
  const [error, setError] = useState("");
  const [passwordShowHide, setPasswordShowHide] = useState(true);
  const [signUp, { data, isLoading, error: signUpError }] = useSignUpMutation();

  // error handler
  useEffect(() => {
    if (!isLoading && signUpError !== undefined) {
      if ("data" in signUpError) {
        const errorData = (signUpError as { data: any }).data;
        if (errorData) {
          setError(errorData.message || "Login failed!");
        }
      }
    }
  }, [data, signUpError]);

  // form operation and submit
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setError("");
    signUp(data);
  };

  // password show - hide

  return (
    <>
      {error && (
        <div className="mb-5 bg-red-50 px-5 py-2 rounded-lg border border-red-300 text-red-500 text-center">
          <p>{error}</p>
        </div>
      )}
      <form action="" className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          id="#id-9"
          placeholder="First Name"
          {...register("first_name", { required: true })}
          color="gray"
          sizing="md"
          addon={<User size={20} color="#5E718D" />}
          addonPosition="left"
        />
        {errors.first_name && (
          <span className="text-red-500 mt-1">First name is required</span>
        )}
        <TextInput
          id="#id-9"
          placeholder="Last Name"
          {...register("last_name", { required: true })}
          color="gray"
          sizing="md"
          addon={<User size={20} color="#5E718D" />}
          addonPosition="left"
        />{" "}
        {errors.last_name && (
          <span className="text-red-500 mt-1">Last name is required</span>
        )}
        <TextInput
          id="#id-9"
          placeholder="example@gmail.com"
          {...register("email", { required: true })}
          color="gray"
          type="email"
          sizing="md"
          addon={<Envelope size={20} color="#5E718D" />}
          addonPosition="left"
        />
        {errors.last_name && (
          <span className="text-red-500 mt-1">Email is required</span>
        )}
        <TextInput
          id="#id-10"
          placeholder="Password"
          {...register("password", {
            required: true,
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
              message:
                "and must contain at least 1 uppercase , 1 special  and be 6 characters long",
            },
          })}
          color="gray"
          sizing="md"
          type="password"
          addon={<Lock size={20} color="#5E718D" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#5E718D" />}
          iconPosition="right"
        />
        {errors.password && (
          <span className="text-red-500 mt-1 mr-2">Password is required</span>
        )}
        {errors.password && (
          <span className="text-red-500 mt-1 ">{errors.password.message}</span>
        )}
        <TextInput
          id="#id-10"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            validate: {
              matchesPassword: (value) => value === getValues("password"),
            },
          })}
          color="gray"
          sizing="md"
          type={passwordShowHide ? "password" : "text"}
          addon={<Lock size={20} color="#5E718D" />}
          addonPosition="left"
          icon={
            <button
              className="cursor-pointer z-50"
              onClick={() => setPasswordShowHide(!passwordShowHide)}
            >
              <EyeSlash size={20} color="#5E718D" />
            </button>
          }
          iconPosition="right"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 mt-1">Passwords do not match</span>
        )}
        {isLoading ? (
          <button className="!w-full !mb-5 !uppercase group rounded-md flex h-min  items-center justify-center text-center font-medium text-white bg-primary-500 border border-transparent hover:bg-primary-600 active:bg-primary-600 focus:ring-4 focus:ring-primary-50 disabled:bg-primary-100 disabled:hover:bg-primary-100 py-2">
            {" "}
            <span className="pr-2">
              <Spinner color="info" size="md" />
            </span>
            Please Wait...
          </button>
        ) : (
          <input
            type="submit"
            value="SIGN UP"
            className="!w-full !mb-5 !uppercase group rounded-md flex h-min  items-center justify-center text-center font-medium text-white bg-primary-500 border border-transparent hover:bg-primary-600 active:bg-primary-600 focus:ring-4 focus:ring-primary-50 disabled:bg-primary-100 disabled:hover:bg-primary-100 py-2"
          />
        )}
      </form>
    </>
  );
};
