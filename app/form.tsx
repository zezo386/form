'use client';

import { addData } from './action';

export default function Form() {
  return (
    <form
      action={addData}
      className="mx-auto mt-12 max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      <h2 className="mb-6 text-xl font-semibold text-gray-900">Add record</h2>

      <div className="mb-4 flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15"
        />
      </div>

      <div className="mb-4 flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15"
        />
      </div>

      <div className="mb-6 flex flex-col gap-1.5">
        <label htmlFor="nationalId" className="text-sm font-medium text-gray-700">
          National ID
        </label>
        <input
          id="nationalId"
          name="nationalId"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 disabled:cursor-not-allowed disabled:bg-blue-300"
      >
        Submit
      </button>
    </form>
  );
}