import * as RadixTooltip from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';

type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
};

export function Tooltip({ content, children, side = 'top', delay = 300 }: TooltipProps) {
  return (
    <RadixTooltip.Root delayDuration={delay}>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content side={side} sideOffset={6} className="tooltip">
          {content}
          <RadixTooltip.Arrow className="tooltip-arrow" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}

export const TooltipProvider = RadixTooltip.Provider;