import React from "react"

import kmfurnitureImg from "../images/kmfurniture.jpg"
import sklepOnlineImg from "../images/sklepOnline.jpg"
import starWarsImg from "../images/star-wars.png"
import lgTechImg from "../images/lg-tech.jpg"
import frankowiczeImg from "../images/frankowicze.jpg"
import transwiseImg from "../images/transwise.jpg"

interface ImageMap {
  [key: string]: string
}

const imageMap: ImageMap = {
  "kmfurniture.jpg": kmfurnitureImg,
  "sklepOnline.jpg": sklepOnlineImg,
  "star-wars.png": starWarsImg,
  "lg-tech.jpg": lgTechImg,
  "frankowicze.jpg": frankowiczeImg,
  "transwise.jpg": transwiseImg,
}

interface ImageProps {
  filename: string
  alt: string
  className?: string
}

const Image: React.FC<ImageProps> = ({
  filename,
  alt,
  className = "img-fluid",
}) => {
  const imageSrc = imageMap[filename]

  if (!imageSrc) {
    console.warn(`Image not found: ${filename}`)
    return null
  }

  return <img src={imageSrc} alt={alt} className={className} />
}

export default Image
