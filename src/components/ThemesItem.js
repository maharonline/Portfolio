import React from 'react'
import { themes } from '../data'
import { FaCog } from 'react-icons/fa'
import { BsMoon } from 'react-icons/bs'

export default function ThemesItem({color,img}) {
  return <img src={img} alt="" className='theme_img' />
}
