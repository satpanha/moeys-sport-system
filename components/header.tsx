'use client'

import { HeaderButton } from '@/components/common/headerButton'
import { BurgerMenu } from '@/components/common/burgerMenu'
import { RegistrationType } from '@/types'
import Image from 'next/image';
import moeysLogo from "@/assets/moeysLogo.png";


interface HeaderProps {
  onRegistrationTypeChange: (type: RegistrationType) => void
  currentType: RegistrationType
}

export default function Header({ onRegistrationTypeChange, currentType }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Image 
                src={moeysLogo}
                alt="moeys logo"
                width={120}
                height={120}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ក្រសួងអប់រំ យុវជន និងកីឡា</h1>
              <p className="text-sm text-muted-foreground">Ministry of Education, Youth and Sport</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-3">
            <HeaderButton
              variant={currentType === 'leader' ? 'primary' : 'outline'}
              onClick={() => onRegistrationTypeChange('leader')}
            >
              Register as Leader
            </HeaderButton>
            <HeaderButton
              variant={currentType === 'player' ? 'primary' : 'outline'}
              onClick={() => onRegistrationTypeChange('player')}
            >
              Register as Player
            </HeaderButton>
          </div>

          {/* Mobile Navigation */}
          <BurgerMenu onRegistrationTypeChange={onRegistrationTypeChange} currentType={currentType} />
        </div>
      </div>
    </header>
  )
}
