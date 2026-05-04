"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type ReactNode } from "react";

type Props = Omit<ImageProps, "onError"> & {
  /** Rendered when the image is missing or fails to load */
  fallback: ReactNode;
};

/**
 * Wraps next/image with a graceful placeholder. If the file at `src` 404s,
 * the fallback content (e.g., initials or a label) is shown instead.
 * Used so the portfolio doesn't look broken before the user adds their own images.
 */
export default function ImageWithFallback({ fallback, alt, ...props }: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <>{fallback}</>;
  }

  return <Image alt={alt} onError={() => setErrored(true)} {...props} />;
}
