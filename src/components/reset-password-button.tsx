"use client";

import { Button } from "./button";

type User = {
  email: string;
  uid: string;
  alternativeEmail: string;
};

export function ResetPasswordButton({ user }: { user: User }) {
  return (
    <Button
      onClick={() => {
        console.log(`Resetting password for ${user.email}`);
      }}
    >
      Reset password
    </Button>
  );
}
