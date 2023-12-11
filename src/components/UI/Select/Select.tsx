'use client'

import React from 'react'
import s from './Select.module.scss'
import classNames from 'classnames'
import {useState} from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'


interface IProps {
    className?: string;
    withImg: boolean;
    list: ITitle[],
    title: ITitle
    onChange: (item:any) => void,
}

interface ITitle {
    id: number,
    text: string,
}

const Select: React.FC<IProps> = ({
    className,
    withImg = false,
    list,
    onChange,
    title,
}) =>  {
    const cn = classNames(
        className,
        s.select,
        {
            
        }
    )

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<number>(title.id)
    const ref = useOnclickOutside((e: any) => {
        if(e.target.classList && e.target.classList.length > 0 && e.target.classList[0] === s.select) return
        setIsOpen(true)
    });
    
    switch (withImg) {
        case false :
            return (
                <div ref={ref} className={cn}>
                    <div onClick={() => setIsOpen(!isOpen)} className={s.select__title}>
                        {title.text}
                        <svg className={isOpen ? s.svg : s.svg_rotate} xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.85355 0.146447C8.04882 0.341709 8.04882 0.658291 7.85355 0.853553L4.35355 4.35355C4.15829 4.54882 3.84171 4.54882 3.64645 4.35355L0.146447 0.853553C-0.0488157 0.658291 -0.0488157 0.341709 0.146447 0.146447C0.341709 -0.0488155 0.658291 -0.0488155 0.853553 0.146447L4 3.29289L7.14645 0.146447C7.34171 -0.0488155 7.65829 -0.0488155 7.85355 0.146447Z" fill="white"/>
</svg>
                    </div>
                    <div className={isOpen ? s.select__body : s.select__body_active}>
                        {list.map((item) => (
                            <div 
                            className={selected === item.id ? s.selected : s.notselected} 
                            onClick={() => {
                                onChange(item)
                                setSelected(item.id)
                                }}>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            )
        case true :
            return (
                <div className={cn}><input type='password'></input></div>
            )
    }
}

export default Select