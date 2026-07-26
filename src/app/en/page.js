// src/app/en/page.js
'use client'

import { useState, useEffect } from 'react'
import Home from '../page'

export default function EnglishPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    localStorage.setItem('language', 'en')
  }, [])

  if (!isClient) {
    return null
  }

  return <Home />
}