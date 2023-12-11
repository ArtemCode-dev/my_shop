import React from 'react'
import s from './Input.module.scss'
import classNames from 'classnames'
import search from '@/public/images/svg/UI/search.svg'

interface IProps {
    className?: string;
    type: string
    placeholder?: string
}

const Input: React.FC<IProps> = ({
    className,
    type = 'text',
    
}) =>  {
    const cn = classNames(
        className,
        s.input,
        {
            [s.input_text]: type === 'text',
        }
    )
    switch (type) {
        case 'text' :
            return (
                <div className={cn}><input type='text'></input><picture><img alt='search' src={search.src}/></picture></div>
            )
        case 'password' :
            return (
                <div className={cn}><input type='password'></input></div>
            )
    }
}

export default Input