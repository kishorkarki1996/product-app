import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Make sure the request is successful
    const response = await fetch("http://localhost:3001/products"); // Fetch from JSON Server

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }
    // Try to parse the JSON response
    const data = await response.json();
    // Return the data as JSON
    return NextResponse.json(data);
  } catch (error) {
    // Handle different types of errors
    if (error instanceof Error) {
      // This handles known errors, including failed JSON parsing
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      // Handle any unknown errors
      return NextResponse.json(
        { message: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }
}
