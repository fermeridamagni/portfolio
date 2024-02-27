"use client";

import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Providers({ children }) {
  const router = useRouter();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
