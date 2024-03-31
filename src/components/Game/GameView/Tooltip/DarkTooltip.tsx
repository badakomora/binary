import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';


export const DarkTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'var(--high-beta)',
      color: 'var(--contrast-beta);',
      padding:'1rem',
      fontSize: '0.75rem',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: 'var(--high-beta)',
    },
  }));
  

