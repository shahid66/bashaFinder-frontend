"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { changePassword } from "@/services/AuthService";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { changePasswordSchema } from "./changePasswordValidation";

export default function ChangePasswordForm() {
  const form = useForm({
    resolver: zodResolver(changePasswordSchema),
  });
  const password = form.watch("new_password");
  const passwordConfirm = form.watch("confirm_password");
  const { setIsLoading } = useUser();

  const searchParams = useSearchParams();

  const router = useRouter();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await changePassword(data);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
       router.back()
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
      <div className="flex items-center flex-col space-x-4 ">
        <span className="text-4xl">🏡</span>
        <div className="text-center my-5">
          <h1 className="text-xl font-semibold">Change Password</h1>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="old_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Old Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="new_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="mt-5 w-full hover:text-green-400 hover:cursor-pointer"
          >
            {isSubmitting ? "Changeing...." : "Change Password"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
