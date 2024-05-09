"use client";

import { Button } from "./button";

type UserInfo = {
  accountEmail?: string;
  alternativeEmail?: string;
};

export function PasswordResetForm({ userInfo }: { userInfo: UserInfo }) {
  return (
    <form
      action={(data) => {
        // stringify the form data
        const email = data.get("email");
        const alternativeEmail = data.get("alternativeEmail");

        console.log(email, alternativeEmail);
        alert(
          `Resetting password. Since this is just a demo, nothing has happened, but in a real app, this button would do the same thing as the support team would do when given a password reset request.`,
        );
      }}
      className="w-fit space-y-8 rounded-md border border-gray-300 p-8 shadow-sm"
    >
      <div className="space-y-4">
        <p>On which platform do you want to reset your password?</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Button type="button" intent="secondary">
            Outlook
          </Button>
          <Button type="button" intent="secondary">
            BigBlueButton
          </Button>
          <Button type="button" intent="secondary">
            OurVLE
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-8">
        {/* current email address */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Account email address</label>
          <input
            defaultValue={userInfo.accountEmail}
            type="email"
            name="email"
            inputMode="email"
            id="email"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="alternativeEmail">Alternative email address</label>
          <input
            type="email"
            defaultValue={userInfo.alternativeEmail}
            inputMode="email"
            name="alternativeEmail"
            id="alternativeEmail"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          />
        </div>
      </div>
      <Button type="submit">Reset password</Button>
    </form>
  );
}
