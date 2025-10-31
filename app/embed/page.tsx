"use client";

import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useCallback } from "react";

export default function Embed() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (_action: FactAction) => {
    // optional: analytics or tracking
  }, []);

  return (
    <div className="w-full h-screen min-h-[100dvh] p-0 m-0 bg-transparent">
      {/* Card wrapper for rounded look inside the iframe */}
      <div className="h-full w-full rounded-2xl border shadow-sm overflow-hidden bg-white dark:bg-slate-900">
        <ChatKitPanel
          theme={scheme}
          onThemeRequest={setScheme}
          onWidgetAction={handleWidgetAction}
        />
      </div>
    </div>
  );
}
