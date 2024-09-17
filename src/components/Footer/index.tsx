import React from 'react'
import { Fab } from "@mui/material";
import ScrollTop from "../Generic/ScrollTop";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Footer() {
  return (
    <>
      <h1>Footer</h1>
      <ScrollTop>
          <Fab size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon fontSize="medium"/>
          </Fab>
      </ScrollTop>
    
    </>
  )
}
