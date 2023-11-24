import { NextResponse } from "next/server";
import { z } from "zod";

const base = (message: string, status = 400) =>
  NextResponse.json(
    {
      message,
    },
    {
      status,
    }
  );

const server = (message?: string) =>
  NextResponse.json(
    {
      message: message || "Internal Server Error",
    },
    {
      status: 500,
    }
  );

const request = (errors: z.ZodIssue[]) =>
  NextResponse.json(
    {
      errors,
      message: "Invalid request",
    },
    {
      status: 400,
    }
  );

const authorization = () =>
  NextResponse.json(
    {
      message: "You are not authenticated.",
    },
    {
      status: 401,
    }
  );

const unauthorized = () =>
  NextResponse.json(
    {
      message: "You do not have permission to run this service.",
    },
    {
      status: 403,
    }
  );

const notDataFound = () =>
  NextResponse.json(
    {
      message: "Data could not be found.",
    },
    {
      status: 404,
    }
  );

export default {
  base,
  server,
  request,
  authorization,
  unauthorized,
  notDataFound,
};
