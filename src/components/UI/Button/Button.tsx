'use client'

import React from 'react'
import s from './Button.module.scss'
import classNames from 'classnames'
import search from '@/public/images/svg/UI/search.svg'

interface IProps {
    className?: string;
    type: string;
    children: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<IProps> = ({
    className,
    type = 'origin',
    children,
    onClick,
}) =>  {
    const cn = classNames(
        className,
        s.button,
        {
            [s.button_origin]: type === 'origin',
            [s.button_dark]: type === 'dark',
        }
    )
    switch (type) {
        case 'origin' :
            return (
                <div onClick={onClick} className={cn}>{children}</div>
            )
        case 'dark' :
            return (
                <div onClick={onClick} className={cn}>{children}</div>
            )
    }
}

export default Button