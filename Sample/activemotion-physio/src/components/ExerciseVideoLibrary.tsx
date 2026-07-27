"use client";

import React from "react";
import { Play, Clock, Dumbbell, Flame } from "lucide-react";

const videos = [
  { title: "Lumbar Stability Phase 1", duration: "12 min", level: "Beginner", icon: Dumbbell },
  { title: "Cervical Mobility Drills", duration: "8 min", level: "Intermediate", icon: Clock },
  { title: "Post-Op Knee Extension", duration: "15 min", level: "Beginner", icon: Flame },
  { title: "Shoulder Scapular Control", duration: "10 min", level: "Advanced", icon: Dumbbell },
];

export default function ExerciseVideoLibrary() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900">Digital Rehab Library</h3>
        <span className="text-xs font-black text-orange-600 uppercase tracking-widest">250+ Videos</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videos.map((video, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-video bg-slate-200 rounded-2xl mb-3 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-all flex items-center justify-center">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform shadow-lg">
                  <Play className="h-4 w-4 text-orange-600 fill-orange-600 ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-[10px] text-white font-bold px-2 py-1 rounded-md">
                {video.duration}
              </div>
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{video.title}</h4>
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-wider text-slate-400">
              <span className="flex items-center gap-1">
                <video.icon className="h-3 w-3" /> {video.level}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all">
        Access Full Member Library
      </button>
    </div>
  );
}
