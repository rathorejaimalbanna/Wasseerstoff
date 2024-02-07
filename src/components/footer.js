import React from 'react'
import { MyResponsiveBar } from './barcharts/bar'

export default function Footer() {
  return (
    <div style={{display:'flex'}}>
      <div style={{marginTop:'10px',marginLeft:'20px'}}>
      <p>Sales Figures</p>
      <h3 style={{lineHeight:"4px"}}>$10,503</h3>
      </div>
      <div  style={{width:'80%',height:"70px",paddingTop:'20px',paddingLeft:'35px'}}>
      <MyResponsiveBar/>
      </div>
    </div>
  )
}
