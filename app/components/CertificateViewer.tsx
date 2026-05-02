"use client";

import React, { useState } from "react";

export default function CertificateViewer({ pdf, thumb }: { pdf?: string; thumb?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-500/20"
      >
        View Certificate
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative h-[90vh] w-[90vw] max-w-4xl rounded-lg bg-white/5">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded bg-white/6 px-3 py-1 text-sm"
            >
              Close
            </button>
            {thumb ? (
              <img src={thumb} alt="Certificate preview" className="h-full w-full object-contain" />
            ) : pdf ? (
              <iframe src={pdf} className="h-full w-full" title="Certificate preview" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-white/70">No preview available</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
