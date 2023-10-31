"use server";

import { connectToDB } from "../validations/mongoose";

export async function updateUser(): Promise<void> {
  {
    connectToDB();
  }
}
