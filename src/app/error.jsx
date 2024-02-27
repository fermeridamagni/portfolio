"use client";

import Main from "@/components/ui/main";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Main flexCenter>
      <p>Error</p>
    </Main>
  );
}
