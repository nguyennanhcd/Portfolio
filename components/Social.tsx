import { socials } from '@/constants/socials'
import Link from 'next/link'
import React from 'react'

interface SocialProps {
  containerStyles?: string
  iconStyles?: string
}

const Social: React.FC<SocialProps> = ({
  containerStyles = '',
  iconStyles = ''
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
