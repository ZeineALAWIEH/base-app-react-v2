/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
      xs0: true; // removes the `xs` breakpoint
      xs: true
      sm: true;
      md: true;
      md9:true;
      lg: true;
      xl:true;
      xxl: true;
    }
    interface Theme  {
      rdx: {
        grayed1: string,
        grayed2: string,
        grayed3: string,
        grayed4: string,
        grayed5: string,
        grayed6: string,
        grayed7: string,
        grayed8: string,
        grayed9: string,
        grayed10:string,
        grayed11:string,
        grayed12:string,
        grayedDark1: string,
        grayedDark2: string,
        grayedDark3: string,
        grayedDark4: string,
        grayedDark5: string,
        grayedDark6: string,
        grayedDark7: string,
        grayedDark8: string,
        grayedDark9: string,
        grayedDark10: string,
        grayedDark11: string,
        grayedDark12: string,
        brand1: string, 
        brand2: string,
        brand3: string,
        brand4: string,
        brand5: string,
        brand6: string,
        brand7: string,
        brand8: string,
        brand9: string,
        brand10: string,
        brand11: string,
        brand12: string,
        brand13: string,
        brand14: string,
        brandDark1: string,
        brandDark2: string,
        brandDark3: string,
        brandDark4: string,
        brandDark5: string,
        brandDark6: string,
        brandDark7: string,
        brandDark8: string,
        brandDark9: string,
        brandDark10: string,
        brandDark11: string,
        brandDark12: string,
      }
  
    }
  
    interface ThemeOptions{
      rdx: {
        grayed1: string,
        grayed2: string,
        grayed3: string,
        grayed4: string,
        grayed5: string,
        grayed6: string,
        grayed7: string,
        grayed8: string,
        grayed9: string,
        grayed10:string,
        grayed11:string,
        grayed12:string,
        grayedDark1: string,
        grayedDark2: string,
        grayedDark3: string,
        grayedDark4: string,
        grayedDark5: string,
        grayedDark6: string,
        grayedDark7: string,
        grayedDark8: string,
        grayedDark9: string,
        grayedDark10: string,
        grayedDark11: string,
        grayedDark12: string,
        brand1: string, 
        brand2: string,
        brand3: string,
        brand4: string,
        brand5: string,
        brand6: string,
        brand7: string,
        brand8: string,
        brand9: string,
        brand10: string,
        brand11: string,
        brand12: string,
        brand13: string,
        brand14: string,
        brandDark1: string,
        brandDark2: string,
        brandDark3: string,
        brandDark4: string,
        brandDark5: string,
        brandDark6: string,
        brandDark7: string,
        brandDark8: string,
        brandDark9: string,
        brandDark10: string,
        brandDark11: string,
        brandDark12: string,
      }  
    }
  }