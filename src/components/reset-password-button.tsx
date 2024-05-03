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
        alert(
          `Resetting password for ${user.email}. Since this is just a demo, nothing has happened, but in a real app, this button would do the same thing as the support team would do when given a password reset request.`,
        );
      }}
    >
      Reset password
    </Button>
  );
}
