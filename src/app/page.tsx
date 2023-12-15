import type { Metadata } from 'next'
import Swiper from '../components/Home/Swiper/page'

export const metadata: Metadata = {
  title: 'My shop - Главная',
  description: 'Home page',
}

export default function Home() {
  return (
    <main>
      <Swiper />
    </main>
  )
}
