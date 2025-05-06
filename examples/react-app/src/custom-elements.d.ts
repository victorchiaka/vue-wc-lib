/// <reference types="react" />

import type { ButtonProps, CheckboxProps, TextInputProps } from "@core/lib/dist/lib.d.ts"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['wc-button']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & ButtonProps;
      ['wc-checkbox']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & CheckboxProps;
      ['wc-text-input']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & TextInputProps;
    }
  }
}
