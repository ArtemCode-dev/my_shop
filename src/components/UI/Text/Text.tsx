'use client'

import React from 'react'
import s from './Text.module.scss'
import classNames from 'classnames' 

interface IProps {
    children: React.ReactNode;
    className?: string;
    size: string;
    color?: string;
    error?: boolean;
    bold?: boolean;
}

const Text: React.FC<IProps> = ({
    className,
    children,
    size = 'p3',
    color = 'black',
    error = false,
    bold = false,
}) =>  {
    const cn = classNames(
        className,
        s.text,
        {
            [s.text_h1]: size === 'h1',
            [s.text_h2]: size === 'h2',
            [s.text_h3]: size === 'h3',
            [s.text_h4]: size === 'h4',
            [s.text_p1]: size === 'p1',
            [s.text_p2]: size === 'p2',
            [s.text_p3]: size === 'p3',
            [s.text_p4]: size === 'p4',
            [s.text_error]: error,
            [s.text_bold]: bold,
        }
    )
    switch (size) {
        case 'h1' :
            return (
                <h1 style={{color: color}} className={cn}>{children}</h1>
            )
        case 'h2' :
            return (
                <h2 style={{color: color}} className={cn}>{children}</h2>
            )
        case 'h3' :
            return (
                <h3 style={{color: color}} className={cn}>{children}</h3>
            )
        case 'p1' :
        case 'p2' :
        case 'p3' :
        case 'p4' :
            return (
                <p style={{color: color}} className={cn}>{children}</p>
            )

    }
}

export default Text