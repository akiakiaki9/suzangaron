// src/app/page.js
'use client'

import { useState, useEffect } from 'react'
import { FaPhone, FaMapMarkerAlt, FaTaxi, FaInstagram, FaChevronLeft, FaChevronRight, FaUtensils, FaWineGlassAlt, FaStar } from 'react-icons/fa'
import { MdAccessTime, MdRestaurant, MdLocalDining } from 'react-icons/md'
import { GiKnifeFork, GiSpoon, GiCandleLight } from 'react-icons/gi'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [language, setLanguage] = useState('ru')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  const slides = [
    '/images/carousel/1.png',
    '/images/carousel/2.png',
    '/images/carousel/3.png',
    '/images/carousel/4.jpg',
    '/images/carousel/5.jpg',
    '/images/carousel/6.jpg',
  ]

  useEffect(() => {
    const savedLang = localStorage.getItem('language')
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    if (lang === 'en') {
      window.location.href = '/en'
    } else {
      window.location.href = '/'
    }
  }

  const address = "Suzangaron Restaurant, Bukhara, Uzbekistan"
  const latitude = 39.774556
  const longitude = 64.416762

  const handleYandexTaxi = () => {
    const fullAddress = "Suzangaron Restaurant, " + address
    const deeplink = `yandextaxi://route/?end-lat=${latitude}&end-lon=${longitude}&end-address=${encodeURIComponent(fullAddress)}`
    const fallbackUrl = `https://taxi.yandex.uz/?rto=${latitude},${longitude}&text=${encodeURIComponent(fullAddress)}`

    window.location.href = deeplink
    setTimeout(() => {
      window.location.href = fallbackUrl
    }, 500)
  }

  const menuData = {
    soups: {
      title: language === 'ru' ? 'СУПЫ' : 'SOUPS',
      icon: '🍲',
      items: language === 'ru' ? [
        { name: 'КУРИНЫЙ СУП', weight: '280 гр', price: '60 000' },
        { name: 'МОСТАВА', weight: '250 гр', price: '60 000' },
        { name: 'ГРИБНОЙ КРЕМ СУП', weight: '280 гр', price: '60 000' },
        { name: 'ЧЕЧЕВИЧНЫЙ КРЕМ СУП', weight: '280 гр', price: '60 000' },
        { name: 'ОКРОШКА ОВОЩНАЯ', weight: '280 гр', price: '60 000' },
        { name: 'САЛЯНКА', weight: '280 гр', price: '60 000' },
        { name: 'МАНПАР', weight: '280 гр', price: '60 000' },
      ] : [
        { name: 'CHICKEN SOUP', weight: '280 g', price: '60,000' },
        { name: 'MASTAVA', weight: '250 g', price: '60,000' },
        { name: 'CREAMY MUSHROOM SOUP', weight: '280 g', price: '60,000' },
        { name: 'CREAMY LENTIL SOUP', weight: '280 g', price: '60,000' },
        { name: 'VEGETABLE OKROSHKA', weight: '280 g', price: '60,000' },
        { name: 'SOLYANKA', weight: '280 g', price: '60,000' },
        { name: 'MANPAR', weight: '280 g', price: '60,000' },
      ]
    },
    eastern: {
      title: language === 'ru' ? 'ВОСТОЧНАЯ КУХНЯ' : 'EASTERN CUISINE',
      icon: '🏮',
      items: language === 'ru' ? [
        { name: 'ПЛОВ СУЗАНГАРОН', weight: '1 порция', price: '65 000' }, // Цена изменена
        { name: 'СУЗАНГАРОН', weight: '1 порция', price: '210 000' },
        { name: 'ОБЖАРЕННАЯ БАРАНИНА "ВАГУРИ"', weight: '330гр / 1кг', price: '195000/650 000' },
        { name: 'БОН ВАГУРИ', weight: '330гр / 1 кг', price: '210000/680 000' },
        { name: 'ЖИЗ УЙГУРСКИЙ ОВОЩНОЙ', weight: '330ГР / 1 КГ', price: '175000/600 000' },
        { name: 'ЖИЗ УЙГУРСКИЙ', weight: '330гр / 1 кг', price: '190000/570 000' },
        { name: 'КУРИНЫЙ ЖИЗ ОВОЩНОЙ', weight: '330гр / 1кг', price: '80000/220 000' },
        { name: 'ЖУЖА', weight: '1шт 450 гр', price: '120 000' },
        { name: 'ДОЛМА', weight: '8шт', price: '90 000' },
      ] : [
        { name: 'SUZANGARON PILAF', weight: '1 serving', price: '65,000' }, // Цена изменена
        { name: 'SUZANGARON', weight: '1 serving', price: '210,000' },
        { name: 'FRIED BEEF "VAGURI"', weight: '330g / 1 kg', price: '195,000 / 650,000' },
        { name: 'BON VAGURI', weight: '330g / 1 kg', price: '210,000 / 680,000' },
        { name: 'JIZ UYGHUR VEGETABLE', weight: '330g / 1 kg', price: '175,000 / 600,000' },
        { name: 'UYGHUR JIZ', weight: '330g / 1 kg', price: '190,000 / 570,000' },
        { name: 'CHICKEN JIZ WITH VEGETABLES', weight: '330g / 1kg', price: '80,000 / 220,000' },
        { name: 'JUJA', weight: '1 pc, 450 g', price: '120,000' },
        { name: 'DOLMA', weight: '8 pcs', price: '90,000' },
      ]
    },
    european: {
      title: language === 'ru' ? 'ЕВРОПЕЙСКАЯ КУХНЯ' : 'EUROPEAN CUISINE',
      icon: '🍷',
      items: language === 'ru' ? [
        { name: 'РАТАТУЙ', weight: '500 гр', price: '65 000', desc: 'говядина, баклажан, помидор, винный соус' }, // Добавлен
        { name: 'ВАРАХША', weight: '300 гр', price: '75 000', desc: 'говядина, помидор, чеснок' }, // Добавлен
        { name: 'БАРАНИНА ЧЕХОЛБЕН', weight: '350 гр', price: '85 000', desc: 'баранина, лук, помидор, перец, зелень, чеснок' }, // Добавлен
        { name: 'ШНИЦЕЛЬ СЫРНЫМ СОУСОМ', weight: '360 гр', price: '120 000', desc: 'курица филе, слив соус, картофель деревенский, микс салата' },
        { name: 'КАРЕ ЯГНЕНКА', weight: '300гр', price: '220 000', desc: 'корейка, овощи гриль' },
        { name: 'ТУШЕНЕННАЯ ТЕЛЯТИНА С ОВОЩАМИ', weight: '300гр', price: '145 000', desc: 'Говядина, овощи' },
        { name: 'ТОМЛЕННАЯ БАРАНИНА С МОЛОДЫМ КАРТОФЕЛЕМ', weight: '340 гр', price: '190 000', desc: 'филе баранины, лук, картофель' },
        { name: 'СТЕЙК ИЗ ФОРЕЛИ ПОД СЛИВОЧНЫМ СОУСОМ', weight: '300 гр', price: '250 000', desc: 'филе форели под сливочным соусом и микс салата' },
        { name: 'СТЕЙК "РИБАЙ"', weight: '100 гр', price: '95 000', desc: 'мясо говядины, овощи и соус барбекю' },
        { name: 'СТЕЙК СТРИПЛОЙН СОУСОМ BBQ', weight: '100гр', price: '95 000', desc: 'мясо говядина, овощи, соус BBQ' },
        { name: 'ФИЛЕ МИНЬОН В СЛИВОЧНОМ СОУСЕ', weight: '300 гр', price: '235 000', desc: 'бон филе, сливки, лук, грибы, микс салата' },
        { name: 'КРЕВЕТКИ ШАБЛИ В ТЕМПУРЕ', weight: '200гр', price: '160000', desc: 'тигр. креветки, соус чили' },
        { name: 'МЯСА ПО ФРАНЦУЗКИ', weight: '300 гр', price: '220 000', desc: 'бон филе, лук, грибы, сливки, помидор, сыр, чеснок' },
        { name: 'МЯСА С ГРИБАМИ СЛИВОЧНИМ СОУСЕ', weight: '300 гр', price: '220 000', desc: 'бон филе, лук, грибы, сливки, помидор, сыр, чеснок' },
        { name: 'РАТАТУЙ СИРОМ', weight: '500 гр', price: '400 000' },
      ] : [
        { name: 'RATATOUILLE', weight: '500 g', price: '65,000', desc: 'beef, eggplant, tomato, wine sauce' }, // Добавлен
        { name: 'VARAKHSHA', weight: '300 g', price: '75,000', desc: 'beef, tomato, garlic' }, // Добавлен
        { name: 'LAMB CHEHOLBEN', weight: '350 g', price: '85,000', desc: 'lamb, onion, tomato, pepper, herbs, garlic' }, // Добавлен
        { name: 'CHICKEN SCHNITZEL WITH CHEESE SAUCE', weight: '360 g', price: '120,000', desc: 'chicken fillet, cream sauce, country-style potatoes, mixed salad' },
        { name: 'LAMB CHOPS', weight: '300 g', price: '220,000', desc: 'rack of lamb, grilled vegetables' },
        { name: 'STEWED VEAL WITH VEGETABLES', weight: '300 g', price: '145,000', desc: 'beef, vegetables' },
        { name: 'BRAISED LAMB WITH YOUNG POTATOES', weight: '340 g', price: '190,000', desc: 'lamb fillet, onion, potatoes' },
        { name: 'TROUT STEAK WITH CREAM SAUCE', weight: '300 g', price: '250,000', desc: 'trout fillet with cream sauce and mixed salad' },
        { name: 'RIBEYE STEAK', weight: '100 g', price: '95,000', desc: 'beef, vegetables and barbecue sauce' },
        { name: 'STRIPLOIN STEAK WITH BBQ SAUCE', weight: '100 g', price: '95,000', desc: 'beef, vegetables, BBQ sauce' },
        { name: 'FILLET MIGNON IN CREAM SAUCE', weight: '300 g', price: '235,000', desc: 'beef fillet, cream, onion, mushrooms, mixed salad' },
        { name: 'TEMPURA TIGER SHRIMP', weight: '200 g', price: '160,000', desc: 'tiger shrimp, chili sauce' },
        { name: 'MEAT "A LA FRANCAISE"', weight: '300 g', price: '220,000', desc: 'beef fillet, onion, mushrooms, cream, tomato, cheese, garlic' },
        { name: 'MEAT WITH MUSHROOMS IN CREAM SAUCE', weight: '300 g', price: '220,000', desc: 'beef fillet, onion, mushrooms, cream, tomato, cheese, garlic' },
        { name: 'POTATOES WITH CHEESE', weight: '500 g', price: '400,000' },
      ]
    },
    pasta: {
      title: language === 'ru' ? 'ПАСТЫ' : 'PASTAS',
      icon: '🍝',
      items: language === 'ru' ? [
        { name: 'ФЕТУЧИНИ АЛЬФРЕДО', weight: '320 гр', price: '95 000' },
        { name: 'ТАЛЬЯТЕЛЛЕ БОНФИЛЕ', weight: '380 гр', price: '110 000' },
        { name: 'ФЕТУЧИНИ НЕОПОЛЕТАНО', weight: '350 гр', price: '80 000' },
      ] : [
        { name: 'FETTUCCINE ALFREDO', weight: '320 g', price: '95,000' },
        { name: 'TAGLIATELLE BONFILE', weight: '380 g', price: '110,000' },
        { name: 'FETTUCCINE NEOPOLITANO', weight: '350 g', price: '80,000' },
      ]
    },
    coldAppetizers: {
      title: language === 'ru' ? 'ХОЛОДНЫЕ ЗАКУСКИ' : 'COLD APPETIZERS',
      icon: '🧀',
      items: language === 'ru' ? [
        { name: 'МЯСНОЕ АССОРТИ', weight: '250 гр', price: '250 000', desc: 'конина, гов язык, гов рулет, кур рулет, пресованное мясо' },
        { name: 'СЫРНОЕ АССОРТИ', weight: '300 гр', price: '150 000', desc: 'тильзитер, мрамор, гауда, дорблю, масдам, мед, орех' },
        { name: 'СОЛЕНОЕ АССОРТИ', weight: '360 гр', price: '80 000', desc: 'корнишоны, черри, патисон, грибы, мини кукуруза, острые перчики' },
        { name: 'ОВОЩНОЕ АССОРТИ', weight: '220 гр', price: '70 000', desc: 'свеж огурцы, помидор, болгарский перец лук, зелень' },
        { name: 'СЕЛЕДОЧКА С КАРТОФЕЛЕМ', weight: '100 гр', price: '60 000', desc: 'сельд, картофель, лук, зеленый горошек' },
        { name: 'ОЛИВКИ И МАСЛИНЫ', weight: '200 гр', price: '50 000' },
        { name: 'ЧАККА - СУЗЬМА', weight: '300 гр', price: '50 000', desc: 'традиционный узбекский кисломолочный продукт' },
        { name: 'ЗАКУСКА ИЗ БАКЛАЖАНОВ', weight: '300 гр', price: '60 000' },
      ] : [
        { name: 'MEAT ASSORTMENT', weight: '250 g', price: '250,000', desc: 'horse meat, beef tongue, beef roll, chicken roll, pressed meat' },
        { name: 'CHEESE ASSORTMENT', weight: '300 g', price: '150,000', desc: 'tilsiter, marble, gouda, dorblu, maasdam, honey, walnut' },
        { name: 'PICKLED ASSORTMENT', weight: '360 g', price: '80,000', desc: 'gherkins, cherry tomatoes, pattypan squash, mushrooms, baby corn, hot peppers' },
        { name: 'VEGETABLE ASSORTMENT', weight: '220 g', price: '70,000', desc: 'fresh cucumber, tomato, bell pepper, onion, greens' },
        { name: 'HERRING WITH POTATOES', weight: '100 g', price: '60,000', desc: 'herring, potato, onion, green peas' },
        { name: 'OLIVES AND BLACK OLIVES', weight: '200 g', price: '50,000' },
        { name: 'CHAKKA - SUZMA', weight: '300 g', price: '50,000', desc: 'traditional Uzbek fermented milk product' },
        { name: 'EGGPLANT APPETIZER', weight: '300 g', price: '60,000' },
      ]
    },
    barbecue: {
      title: language === 'ru' ? 'ШАШЛЫКИ' : 'SHASHLIKS',
      icon: '🔥',
      items: language === 'ru' ? [
        { name: 'ГОВЯДИНА КУСКОВАЯ', weight: '1порц', price: '130000' },
        { name: 'БАРАНИНА КУСКОВАЯ', weight: '1 порц', price: '130 000' },
        { name: 'КУФТА - ЛЮЛЯ КЕБАБ', weight: '1 порц', price: '80 000' },
        { name: 'РУЛЕТ СУЗАНГАРОН', weight: '1 порц', price: '140 000' },
        { name: 'БЕДРО КУРИЦЫ НА МАНГАЛЕ', weight: '1 порц', price: '120 000' },
        { name: 'ОВОЩИ НА МАНГАЛЕ', weight: '330 гр', price: '60 000' },
        { name: 'КОЛБАСКИ АССОРТИ', weight: '330гр', price: '145 000' },
      ] : [
        { name: 'DICED BEEF', weight: '1 portion', price: '130,000' },
        { name: 'DICED LAMB', weight: '1 portion', price: '130,000' },
        { name: 'KOFTA - LYULYA KEBAB', weight: '1 portion', price: '80,000' },
        { name: 'SUZANGARON ROLL', weight: '1 portion', price: '140,000' },
        { name: 'CHICKEN THIGH ON THE MANGAL', weight: '1 portion', price: '120,000' },
        { name: 'GRILLED VEGETABLES', weight: '330 g', price: '60,000' },
        { name: 'SAUSAGE ASSORTMENT', weight: '330 g', price: '145,000' },
      ]
    },
    salads: {
      title: language === 'ru' ? 'САЛАТЫ' : 'SALADS',
      icon: '🥗',
      items: language === 'ru' ? [
        { name: 'САЛАТ СУЗАНГАРОН', weight: '350 гр', price: '85 000', desc: 'руколла 60гр, черри 30гр, огурец 20гр, шампиньоны 20гр, перец болгарский 20гр, красный лук 10гр, сыр пармезан 15гр, мясо 100гр, соус 50гр, мини кукуруза 15-20гр' }, // Добавлен
        { name: 'ЧУПОНЧА', weight: '220 гр', price: '65 000', desc: 'помидоры, огурцы, сузьма, зелень' },
        { name: 'СТЕЙК САЛАТ', weight: '200 гр', price: '120 000', desc: 'микс салата, руколла, черри, бон филе, франц соус' },
        { name: 'РУКОЛЛА С КРЕВЕТКАМИ', weight: '250 гр', price: '140 000', desc: 'руколла, черри, перец болгарский, креветки, пармезан, франц соус' },
        { name: 'ЦЕЗАРЬ С КУРИЦЕЙ ФИЛЕ', weight: '280 гр', price: '90 000', desc: 'кур.филе, айсберг, черри, перепелиные яйца, пармезан, соус цезарь' },
        { name: 'ЦЕЗАРЬ С КРЕВЕТКАМИ', weight: '220 г', price: '140 000', desc: 'креветки, айсберг, черри, перепелиные яйца, пармезан, соус цезарь' },
        { name: 'ГРЕЧЕСКИЙ', weight: '250 гр', price: '85 000', desc: 'помидоры,огурцы, болгарский перец, сыр фетакса' },
        { name: 'РУККОЛА С МИНИ МОЦАРЕЛОЙ', weight: '220 гр', price: '85 000', desc: 'руккола, черри, болгарский перец, моцарелла, гранатовый соус' },
        { name: 'КАПРЕЗА', weight: '250 гр', price: '110 000', desc: 'моцарелла, помидоры, руккола, соус песто, кедровые орешки' },
        { name: 'ХРУСТЯШИЙ БАКЛАЖАН', weight: '250 гр', price: '95 000', desc: 'хрустящий баклажан, помидоры, сыр креметто, руккола, соус от шефа' },
        { name: 'БУРАТТА', weight: '200гр', price: '115 000', desc: 'сыр буратта, руккола, черри, песто, французская заправка' },
        { name: 'ВЕГЕТАРИАНСКИЙ С КРЕМЕТТОЙ', weight: '200гр', price: '70 000', desc: 'микс салата, руколла, черри, сыр креметто, медогорчичный соус, орехи' },
        { name: 'ШАКАРОБ', weight: '220 гр', price: '60 000', desc: 'помидор, красный лук' },
      ] : [
        { name: 'SUZANGARON SALAD', weight: '350 g', price: '85,000', desc: 'arugula 60g, cherry tomatoes 30g, cucumber 20g, champignons 20g, bell pepper 20g, red onion 10g, parmesan cheese 15g, meat 100g, sauce 50g, mini corn 15-20g' }, // Добавлен
        { name: 'CHUPONCHA', weight: '220 g', price: '65,000', desc: 'tomatoes, cucumbers, suzma, greens' },
        { name: 'STEAK SALAD', weight: '200 g', price: '120,000', desc: 'lettuce mix, arugula, cherry tomatoes, beef tenderloin, French sauce' },
        { name: 'ARUGULA WITH SHRIMPS', weight: '250 g', price: '140,000', desc: 'arugula, cherry tomatoes, bell pepper, shrimp, parmesan, French sauce' },
        { name: 'CAESAR WITH CHICKEN FILLET', weight: '280 g', price: '90,000', desc: 'chicken fillet, iceberg lettuce, cherry tomatoes, quail eggs, parmesan, Caesar sauce' },
        { name: 'CAESAR WITH SHRIMPS', weight: '220 g', price: '140,000', desc: 'shrimp, iceberg lettuce, cherry tomatoes, quail eggs, parmesan, Caesar sauce' },
        { name: 'GREEK SALAD', weight: '250 g', price: '85,000', desc: 'tomatoes, cucumbers, bell pepper, feta cheese' },
        { name: 'ARUGULA WITH MINI MOZZARELLA', weight: '220 g', price: '85,000', desc: 'arugula, cherry tomatoes, bell pepper, mozzarella, pomegranate sauce' },
        { name: 'CAPRESE', weight: '250 g', price: '110,000', desc: 'mozzarella, tomatoes, arugula, pesto sauce, pine nuts' },
        { name: 'CRISPY EGGPLANT', weight: '250 g', price: '95,000', desc: 'crispy eggplant, tomatoes, cream cheese, arugula, chef\'s sauce' },
        { name: 'BURRATA', weight: '200 g', price: '115,000', desc: 'burrata cheese, arugula, cherry tomatoes, pesto, French dressing' },
        { name: 'VEGETARIAN WITH CREMETTO', weight: '200 g', price: '70,000', desc: 'mixed greens, arugula, cherry tomatoes, cream cheese, honey-mustard sauce, nuts' },
        { name: 'SHAKAROB', weight: '220 g', price: '60,000', desc: 'tomato, red onion' },
      ]
    },
    garnish: {
      title: language === 'ru' ? 'ГАРНИРЫ' : 'SIDE DISHES',
      icon: '🥔',
      items: language === 'ru' ? [
        { name: 'КАРТОФЕЛЬ ФРИ', weight: '170 гр', price: '60 000' },
        { name: 'КАРТОФЕЛЬ ПО ДЕРЕВЕНСКИ', weight: '200 гр', price: '60 000' },
        { name: 'КАРТОФЕЛЬ ПЮРЕ', weight: '200гр', price: '60 000' },
        { name: 'ОВОЩИ ГРИЛЬ', weight: '200гр', price: '60 000' },
        { name: 'РИС', weight: '170гр', price: '60 000' },
      ] : [
        { name: 'FRENCH FRIES', weight: '170 g', price: '60,000' },
        { name: 'COUNTRY-STYLE POTATOES', weight: '200 g', price: '60,000' },
        { name: 'MASHED POTATOES', weight: '200 g', price: '60,000' },
        { name: 'GRILLED VEGETABLES', weight: '200 g', price: '60,000' },
        { name: 'RICE', weight: '170 g', price: '60,000' },
      ]
    },
    desserts: {
      title: language === 'ru' ? 'ДЕСЕРТЫ' : 'DESSERTS',
      icon: '🍰',
      items: language === 'ru' ? [
        { name: 'САНСЕБАСТЬЯН', weight: '1 шт', price: '80 000', desc: 'клубника, манго, банан, киви на выбор' },
        { name: 'МОРОЖЕННОЕ В АССОРТИМЕНТЕ', weight: '1 шт', price: '45 000' },
        { name: 'ФРУКТОВОЕ АССОРТИ', weight: '', price: '50000', desc: 'Арбуз, Дыня' },
        { name: 'НАПОЛЕОН', weight: '1шт', price: '60000' },
        { name: 'ЧИЗКЕЙК ШОКОЛАДНЫЙ', weight: '1ШТ', price: '60000' },
        { name: 'ЧИЗКЕЙК КЛАССИЧЕСКИЙ', weight: '1ШТ', price: '60000' },
        { name: 'МЕДОВИК', weight: '1ШТ', price: '60000' },
        { name: 'ШТРУДЕЛЬ', weight: '1ШТ', price: '70000' },
      ] : [
        { name: 'SAN SEBASTIAN CAKE', weight: '1 pc', price: '80,000', desc: 'strawberry, mango, banana, kiwi - optional' },
        { name: 'ASSORTED ICE CREAM', weight: '1 pc', price: '45,000' },
        { name: 'FRUIT PLATTER', weight: '', price: '50,000', desc: 'Watermelon, Melon' },
        { name: 'NAPOLEON CAKE', weight: '1 pc', price: '60,000' },
        { name: 'CHOCOLATE CHEESECAKE', weight: '1 pc', price: '60,000' },
        { name: 'CLASSIC CHEESECAKE', weight: '1 pc', price: '60,000' },
        { name: 'HONEY CAKE', weight: '1 pc', price: '60,000' },
        { name: 'STRUDEL', weight: '1 pc', price: '70,000' },
      ]
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <>
      <header className="header">
        <div className="header-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="slide active"
              style={{
                backgroundImage: `url(${slides[currentSlide]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </AnimatePresence>
          
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">
            <FaChevronLeft />
          </button>
          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">
            <FaChevronRight />
          </button>
          
          <div className="carousel-overlay">
            <div className="carousel-overlay-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="carousel-text"
              >
                <h2 className="carousel-title">SUZANGARON</h2>
                <p className="carousel-subtitle">
                  {language === 'ru' ? 'Ресторан с панорамным видом на Старую Бухару' : 'Restaurant with panoramic view of Old Bukhara'}
                </p>
                <div className="carousel-rating">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="header-content">
          <div className="container">
            <div className="header-top">
              <div className="logo-area">
                <motion.div
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/images/logo.PNG"
                    alt="Suzangaron"
                    width={50}
                    height={50}
                    className="logo-image"
                    priority
                  />
                </motion.div>
                <div className="logo-text">SUZANGARON</div>
              </div>

              <div className="header-info">
                <a href="tel:+998919222900" className="info-item">
                  <FaPhone /> +998 91 922 2900
                </a>
                <span className="info-item">
                  <FaMapMarkerAlt /> {address}
                </span>
                <span className="info-item">
                  <MdAccessTime /> 11:00 – 03:00
                </span>
              </div>

              <div className="header-actions">
                <motion.button 
                  onClick={handleYandexTaxi} 
                  className="btn btn-taxi"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTaxi /> {language === 'ru' ? 'Такси' : 'Taxi'}
                </motion.button>
                <motion.a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaMapMarkerAlt /> {language === 'ru' ? 'Маршрут' : 'Route'}
                </motion.a>

                <div className="language-switcher">
                  <motion.button
                    onClick={() => handleLanguageChange('ru')}
                    className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image
                      src="/images/flags/russian.png"
                      alt="Russian"
                      width={28}
                      height={20}
                      className="flag-icon"
                    />
                  </motion.button>
                  <motion.button
                    onClick={() => handleLanguageChange('en')}
                    className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image
                      src="/images/flags/english.webp"
                      alt="English"
                      width={28}
                      height={20}
                      className="flag-icon"
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <motion.section 
          className="hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-badge">
            <GiCandleLight />
            <span>{language === 'ru' ? 'Премиум ресторан' : 'Premium Restaurant'}</span>
          </div>
          <h1>
            {language === 'ru' ? 'Ресторан и терраса' : 'Restaurant & Terrace'}
            <br />
            <span className="hero-highlight">
              {language === 'ru' ? 'с панорамным видом на Старую Бухару' : 'with panoramic view of Old Bukhara'}
            </span>
          </h1>
          <p className="hero-sub">
            <GiKnifeFork /> {language === 'ru' ? 'Узбекская и европейская кухня' : 'Uzbek and European cuisine'}
          </p>
          <div className="hero-features">
            <span><MdLocalDining /> {language === 'ru' ? 'Авторская кухня' : 'Signature cuisine'}</span>
            <span><FaWineGlassAlt /> {language === 'ru' ? 'Винная карта' : 'Wine list'}</span>
            <span><FaUtensils /> {language === 'ru' ? 'Терраса с видом' : 'Terrace with view'}</span>
          </div>
        </motion.section>

        <div className="menu">
          <motion.div 
            className="menu-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="menu-title">
              <MdRestaurant /> {language === 'ru' ? 'Наше меню' : 'Our Menu'}
            </h2>
            <p className="menu-subtitle">
              {language === 'ru' ? 'Блюда, приготовленные с душой и любовью' : 'Dishes made with soul and love'}
            </p>
          </motion.div>

          {Object.entries(menuData).map(([key, section], index) => (
            <motion.div 
              key={key} 
              className="menu-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="section-header">
                <div className="section-header-line"></div>
                <h3 className="section-title">
                  <span className="section-icon">{section.icon}</span>
                  {section.title}
                </h3>
                <div className="section-header-line"></div>
              </div>
              <div className="menu-items">
                {section.items.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="menu-item"
                    whileHover={{ 
                      x: 8,
                      backgroundColor: 'rgba(201, 169, 110, 0.04)',
                      borderRadius: '8px',
                      paddingLeft: '14px'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="item-info">
                      <div className="item-name">
                        {item.name}
                        {item.desc && (
                          <span className="item-desc">— {item.desc}</span>
                        )}
                      </div>
                      <div className="item-weight">{item.weight}</div>
                    </div>
                    <div className="item-price">{item.price}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.footer 
          className="footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="footer-content">
            <div className="footer-info">
              <h4>SUZANGARON</h4>
              <p>{address}</p>
              <p><MdAccessTime /> 11:00 – 03:00</p>
              <p><FaPhone /> <a href="tel:+998919222900">+998 91 922 2900</a></p>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-social">
              <motion.a 
                href="https://www.instagram.com/suzangaron.restaurant/" 
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 SUZANGARON. {language === 'ru' ? 'Все права защищены' : 'All rights reserved'}</p>
          </div>
        </motion.footer>
      </main>
    </>
  )
}