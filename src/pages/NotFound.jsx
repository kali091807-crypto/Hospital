import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-mint-100 text-teal-700 flex items-center justify-center mx-auto text-3xl font-heading font-extrabold">
          404
        </div>
        <h1 className="font-heading font-extrabold text-3xl text-navy-800">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-text leading-relaxed">
          The hospital page or department you are looking for may have moved or is temporarily unavailable.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm transition-colors shadow-soft-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
