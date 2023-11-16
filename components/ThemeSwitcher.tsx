"use client";

import React, {useEffect, useState} from 'react'
import { useTheme } from 'next-themes';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
  return (
    <Tabs defaultValue={theme}>
        <TabsList className='border'>
            <TabsTrigger value="light" onClick={() => setTheme('light')}>
                <SunIcon className='w-[1.2rem] h-[1.2rem]'></SunIcon>
            </TabsTrigger>
            <TabsTrigger value="dark" onClick={() => setTheme('dark')}>
                <MoonIcon className='w-[1.2rem] h-[1.2rem] rotate-90 transition-all dark:rotate-0'></MoonIcon>
            </TabsTrigger>
            <TabsTrigger value="system" onClick={() => setTheme('system')}>
                <DesktopIcon className='w-[1.2rem] h-[1.2rem]'></DesktopIcon>
            </TabsTrigger>
        </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher