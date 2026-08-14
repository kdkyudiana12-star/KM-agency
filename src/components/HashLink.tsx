"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";

type HashLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "href"> & {
    href: string;
  };

/**
 * Next.js Link treats a click to a hash the URL already contains as a no-op —
 * once you've navigated to /#contact once, clicking it again does nothing
 * because the URL doesn't change. This wrapper always scrolls to the target
 * section directly, so repeated clicks work every time.
 */
export default function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    const [path, hash] = href.split("#");
    if (!hash) return;
    const targetPath = path || "/";
    if (targetPath !== pathname) return;

    const target = document.getElementById(hash);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
