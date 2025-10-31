// app/embed/page.tsx
"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function Embed() {
  const { scheme, setScheme } = useColorScheme();

  // You can wire these to analytics or leave no-ops
  const handleWidgetAction = useCallback(async (_action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      // console.info("[ChatKitPanel] widget action", _action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    // optional: scroll, analytics, etc.
  }, []);

  return (
    <div className="w-full h-screen min-h-[100dvh] p-0 m-0 bg-transparent">
      <div className="h-full w-full rounded-2xl border shadow-sm overflow-hidden">
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>
    </div>
  );
}
