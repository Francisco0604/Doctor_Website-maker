"use client";

import React, { Suspense } from "react";
import LiveSimulatorModal from "@/components/LiveSimulatorModal";

export default function FamilyCarePage() {
  return (
    <Suspense fallback={
      <div className="h-screen w-screen bg-[#030712] flex flex-col items-center justify-center gap-3 text-white">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Loading Preview System...</p>
      </div>
    }>
      <LiveSimulatorModal initialSite="familycare-clinic" />
    </Suspense>
  );
}
