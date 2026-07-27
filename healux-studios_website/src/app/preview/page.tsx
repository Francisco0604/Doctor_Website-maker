"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LiveSimulatorModal from "@/components/LiveSimulatorModal";

function PreviewContent() {
  const searchParams = useSearchParams();
  const siteParam = searchParams.get("site") || "activemotion-physio";
  return <LiveSimulatorModal initialSite={siteParam} />;
}

export default function PreviewPage() {
  return (
    <Suspense fallback={
      <div className="h-screen w-screen bg-[#030712] flex flex-col items-center justify-center gap-3 text-white">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Loading Preview System...</p>
      </div>
    }>
      <PreviewContent />
    </Suspense>
  );
}
