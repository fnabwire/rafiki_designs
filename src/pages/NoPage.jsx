import React from 'react';

function NoPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] bg-[#f5f5dc] text-center">
      <div className="p-8 rounded-md shadow-md bg-white/80">
        <h1 className="text-6xl font-bold text-[#98760B] mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-[#032825] mb-4">Page Not Found</h2>
        <p className="text-[#032825]">The page you are looking for does not exist or has been moved.</p>
      </div>
    </main>
  );
}

export default NoPage;
