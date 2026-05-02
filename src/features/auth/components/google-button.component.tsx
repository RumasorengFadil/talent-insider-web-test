import type { SimpleIcon } from "simple-icons";
import { siGoogle } from "simple-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GoogleButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button variant="secondary" className={cn(className)} {...props}>
      <SimpleIcon icon={siGoogle} className="size-4" />
      Continue with Google
    </Button>
  );
}

type SimpleIconProps = {
  icon: SimpleIcon;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

export function SimpleIcon({ icon, className, ...props }: SimpleIconProps) {
  const { title, path } = icon;

  return (
    <svg
      viewBox="0 0 24 24"
      aria-label={title}
      aria-hidden="false"
      focusable="false"
      className={cn("fill-foreground size-5", className)}
      {...props}
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
}
