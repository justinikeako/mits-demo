"use client";

import { Button } from "./button";

export function RequestInPersonSupportForm() {
  return (
    <form
      action={(data) => {
        // stringify the form data
        const email = data.get("email");
        const message = data.get("message");

        console.log(email, message);
        alert(
          `Support request. Since this is just a demo, nothing has happened, but in a real app, this button would likely ping the support team to request an in-person support request from the backend using an API.`,
        );
      }}
      className="w-fit space-y-8 rounded-md border border-gray-300 p-8 shadow-sm"
    >
      {/* Location input select input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="location" className="block">
          Where will you need our help?
        </label>
        <select
          name="location"
          id="location"
          className="block h-10 min-w-64 rounded-md border border-gray-300 bg-gradient-to-t from-gray-50 px-4 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <option value="HE">Faculty of Humanities and Education</option>
          <option value="ST">Faculty of Science and Technology</option>
          <option value="MS">Faculty of Medical Sciences</option>
          <option value="SS">Faculty of Social Sciences</option>
          <option value="E">Faculty of Engineering</option>
          <option value="L">Faculty of Law</option>
          <option value="S">Faculty of Sport</option>
        </select>
      </div>

      {/* Message input textarea */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="block">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Please provide a message"
          className="block h-10 min-w-64 rounded-md border border-gray-300 bg-gradient-to-t from-gray-50 p-2 px-4 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        />
      </div>

      {/* Contact number input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="contactNumber" className="block">
          Contact number:
        </label>
        <input
          type="tel"
          name="contactNumber"
          id="contactNumber"
          placeholder="Please provide a contact number"
          className="block h-10 min-w-64 rounded-md border border-gray-300 bg-gradient-to-t from-gray-50 px-4 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
