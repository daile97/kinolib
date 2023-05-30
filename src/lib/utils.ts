import { cx } from 'class-variance-authority'
import { ClassValue } from 'class-variance-authority/dist/types'
import { twMerge } from 'tailwind-merge'

// According to the cva docs, the library still has a small margin of error
// wrap the cva components with twMerge to avoid styling conflicts

export const mcn = (...classes: ClassValue[]) => twMerge(cx(...classes))
