"use client";

import { Button } from "./button";

export function EmailQuotaForm({ defaultEmail }: { defaultEmail: string }) {
  return (
    <form
      action={(data) => {
        // stringify the form data
        const email = data.get("email");
        const quota = data.get("quota");

        console.log(email, quota);
        alert(
          `Increasing email quota. Since this is just a demo, nothing has happened, but in a real app, this button would do the same thing as the support team would do when given an email quota request On the backend using an API`,
        );
      }}
      className="w-fit space-y-8 rounded-md border border-gray-300 p-8 shadow-sm"
    >
      <div className="space-y-2">
        <label htmlFor="email" className="block">
          Email address:
        </label>
        <input
          type="email"
          name="email"
          inputMode="email"
          defaultValue={defaultEmail}
          id="email"
          placeholder="example@example.com"
          className="block h-10 min-w-64 rounded-md border border-gray-300 bg-gradient-to-t from-gray-50 px-4 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        />
      </div>

      {/* Quota options */}
      <div className="flex flex-col gap-2">
        <label htmlFor="quota" className="block">
          Email storage Quota:
        </label>
        <div className="flex flex-wrap gap-2">
          <input
            type="radio"
            name="quota"
            id="quota-1"
            className="h-4 w-4 rounded-full border-gray-300 bg-gray-50 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          />
          <label htmlFor="quota-1" className="block text-sm text-gray-700">
            5GB
          </label>
          <input
            type="radio"
            name="quota"
            defaultChecked
            id="quota-2"
            className="h-4 w-4 rounded-full border-gray-300 bg-gray-50 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          />
          <label htmlFor="quota-2" className="block text-sm text-gray-700">
            7GB
          </label>
          <input
            type="radio"
            name="quota"
            id="quota-3"
            className="h-4 w-4 rounded-full border-gray-300 bg-gray-50 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          />
          <label htmlFor="quota-3" className="block text-sm text-gray-700">
            10GB
          </label>
        </div>
      </div>

      <Button type="submit">Increase quota</Button>
    </form>
  );
}
