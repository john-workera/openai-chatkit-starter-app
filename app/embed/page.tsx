"use client";
import { ChatKitPanel } from "@/components/ChatKitPanel";
export default function Embed() {
  return (
    <div className="w-full h-screen min-h-[100dvh] p-0 m-0 bg-transparent">
      <div className="h-full w-full rounded-2xl border shadow-sm overflow-hidden">
        <ChatKitPanel />
      </div>
    </div>
  );
}
