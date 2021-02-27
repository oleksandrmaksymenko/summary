import React from 'react'

import Linkedin from '@icons/Linkedin'
import Mail from '@icons/Mail'
import Location from '@icons/Location'
import Phone from '@icons/Phone'
import Skype from '@icons/Skype'
import Telegram from '@icons/Telegram'
import Viber from '@icons/Viber'
import Git from '@icons/Git'

const contacts = [
  {
    type: 'email',
    link: 'mailto:sky3107@gmail.com',
    icon: <Mail />,
    text: 'sky3107@gmail.com',
  },
  {
    type: 'phone',
    link: 'tel:+380956999392',
    icon: <Phone />,
    text: '+380 (095) 699-93-92',
  },
  {
    type: 'telegram',
    link: 'https://telegram.me/Aleksandr_McS',
    icon: <Telegram />,
    text: 'Message me in to telegram',
  },
  {
    type: 'viber',
    link: 'viber:tel:+380956999392',
    icon: <Viber />,
    text: 'Message me in to viber',
  },
  {
    type: 'skype',
    link: 'https://join.skype.com/invite/dnHsh3cdhUPa',
    icon: <Skype />,
    text: 'Aleksandr Maksymenko',
  },
  {
    type: 'location',
    link: '',
    icon: <Location />,
    text: 'Kiev, Ukraine',
  },
  {
    type: 'linkedin',
    link: 'https://www.linkedin.com/in/aleksandr-maksimenko/',
    icon: <Linkedin />,
    text: 'linkedin.com/in/aleksandr-maksimenko',
  },
  {
    type: 'github',
    link: 'https://github.com/aleksandr-maksymenko',
    icon: <Git />,
    text: 'GitHub',
  },
]

export default function InfoBlock() {
  const defaultInfoBlockClassName = 'info-block'

  return (
    <div className={defaultInfoBlockClassName}>
      <div className={`${defaultInfoBlockClassName}__wrapper`}>
        <ul className={`${defaultInfoBlockClassName}__contact-list`}>
          {contacts.map(contact => (
            <li
              key={contact.type}
              className={`${defaultInfoBlockClassName}__contact`}
            >
              {contact.icon}
              <a
                href={contact.link}
                className={`${defaultInfoBlockClassName}__link`}
              >
                {contact.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}