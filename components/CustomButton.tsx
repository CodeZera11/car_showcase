'use client'

import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({ title, handleClick, containerStyles }: CustomButtonProps) => {
  return (
    <button className={`custom-btn ${containerStyles}`} type={"button"} disabled={false} onClick={handleClick}>
        <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton