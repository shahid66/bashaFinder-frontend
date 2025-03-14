"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getUsers = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users`, {
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      next: {
        tags: ["USER"],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const updateUserRole = async (
  statusData: { role: string },
  id: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/change-status/${id}`,
      {
        method: "POST",
        body: JSON.stringify(statusData),
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
      }
    );
    revalidateTag("USER");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
