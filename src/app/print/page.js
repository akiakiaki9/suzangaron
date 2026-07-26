// src/app/print/page.js - обновленный компонент с правильными позициями

'use client'

import { useState, useEffect } from 'react'
import { FaPrint, FaHome, FaPhone, FaMapMarkerAlt, FaClock, FaUtensils, FaQuoteLeft } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import './print.css'

export default function PrintPage() {
    const [language, setLanguage] = useState('ru')

    useEffect(() => {
        const savedLang = localStorage.getItem('language')
        if (savedLang) {
            setLanguage(savedLang)
        }
    }, [])

    const handlePrint = () => {
        window.print()
    }

    const menuData = {
        soups: {
            title: language === 'ru' ? 'СУПЫ' : 'SOUPS',
            items: [
                { name: 'КУРИНЫЙ СУП', weight: '280 гр', price: '60 000' },
                { name: 'МОСТАВА', weight: '250 гр', price: '60 000' },
                { name: 'ГРИБНОЙ КРЕМ СУП', weight: '280 гр', price: '60 000' },
                { name: 'ЧЕЧЕВИЧНЫЙ КРЕМ СУП', weight: '280 гр', price: '60 000' },
                { name: 'ОКРОШКА ОВОЩНАЯ', weight: '280 гр', price: '60 000' },
                { name: 'САЛЯНКА', weight: '280 гр', price: '60 000' },
                { name: 'МАНПАР', weight: '280 гр', price: '60 000' },
            ]
        },
        eastern: {
            title: language === 'ru' ? 'ВОСТОЧНАЯ КУХНЯ' : 'EASTERN CUISINE',
            items: [
                { name: 'ПЛОВ СУЗАНГАРОН', weight: '1 порция', price: '95 000' },
                { name: 'СУЗАНГАРОН', weight: '1 порция', price: '210 000' },
                { name: 'ОБЖАРЕННАЯ БАРАНИНА "ВАГУРИ"', weight: '330гр / 1кг', price: '195 000 / 650 000' },
                { name: 'БОН ВАГУРИ', weight: '330гр / 1 кг', price: '210 000 / 680 000' },
                { name: 'ЖИЗ УЙГУРСКИЙ ОВОЩНОЙ', weight: '330ГР / 1 КГ', price: '175 000 / 600 000' },
                { name: 'ЖИЗ УЙГУРСКИЙ', weight: '330гр / 1 кг', price: '190 000 / 570 000' },
                { name: 'КУРИНЫЙ ЖИЗ ОВОЩНОЙ', weight: '330гр / 1кг', price: '80 000 / 220 000' },
                { name: 'ЖУЖА', weight: '1шт 450 гр', price: '120 000' },
                { name: 'ДОЛМА', weight: '8шт', price: '90 000' },
            ]
        },
        european: {
            title: language === 'ru' ? 'ЕВРОПЕЙСКАЯ КУХНЯ' : 'EUROPEAN CUISINE',
            items: [
                { name: 'ШНИЦЕЛЬ СЫРНЫМ СОУСОМ', weight: '360 гр', price: '120 000', desc: 'курица филе, слив соус, картоф деревенский , микс салата' },
                { name: 'КАРЕ ЯГНЕНКА', weight: '300гр', price: '220 000', desc: 'корейка, овощи гриль' },
                { name: 'ТУШЕНЕННАЯ ТЕЛЯТИНА С ОВОЩАМИ', weight: '300гр', price: '145 000', desc: 'Говядина, овощи' },
                { name: 'ТОМЛЕННАЯ БАРАНИНА С МОЛОДЫМ КАРТОФЕЛЕМ', weight: '340 гр', price: '190 000', desc: 'филе баранины, лук, картофель' },
                { name: 'СТЕЙК ИЗ ФОРЕЛИ ПОД СЛИВОЧНЫМ СОУСОМ', weight: '300 гр', price: '250 000', desc: 'филе форели под сливочным соусом и микс салата' },
                { name: 'СТЕЙК "РИБАЙ"', weight: '100 гр', price: '95 000', desc: 'мясо говядины, овощи и соус барбекю' },
                { name: 'СТЕЙК СТРИПЛОЙН СОУСОМ BBQ', weight: '100гр', price: '95 000', desc: 'мясо говядина , овощи, соус BBQ' },
                { name: 'ФИЛЕ МИНЬОН В СЛИВОЧНОМ СОУСЕ', weight: '300 гр', price: '235 000', desc: 'бон филе, сливки, лук, грибы, микс салата' },
                { name: 'КРЕВЕТКИ ШАБЛИ В ТЕМПУРЕ', weight: '200гр', price: '160 000', desc: 'тигр. креветки, соус чили' },
                { name: 'МЯСА ПО ФРАНЦУЗКИ', weight: '300 гр', price: '220 000', desc: 'бон филе, лук, грибы, сливки, помидор, сир, чеснок' },
                { name: 'МЯСА С ГРИБАМИ СЛИВОЧНИМ СОУСЕ', weight: '300 гр', price: '220 000', desc: 'бон филе, лук, грибы, сливки, помидор, сир, чеснок' },
                { name: 'РАТАТУЙ СИРОМ', weight: '500 гр', price: '400 000' },
            ]
        },
        pasta: {
            title: language === 'ru' ? 'ПАСТЫ' : 'PASTA',
            items: [
                { name: 'ФЕТУЧИНИ АЛЬФРЕДО', weight: '320 гр', price: '95 000' },
                { name: 'ТАЛЬЯТЕЛЛЕ БОНФИЛЕ', weight: '380 гр', price: '110 000' },
                { name: 'ФЕТУЧИНИ НЕОПОЛЕТАНО', weight: '350 гр', price: '80 000' },
            ]
        },
        coldAppetizers: {
            title: language === 'ru' ? 'ХОЛОДНЫЕ ЗАКУСКИ' : 'COLD APPETIZERS',
            items: [
                { name: 'МЯСНОЕ АССОРТИ', weight: '250 гр', price: '250 000', desc: 'конина, гов язык, гов рулет, кур рулет, пресованное мясо' },
                { name: 'СЫРНОЕ АССОРТИ', weight: '300 гр', price: '150 000', desc: 'тильзитер, мрамор, гауда, дорблю, масдам, мед, орех' },
                { name: 'СОЛЕНОЕ АССОРТИ', weight: '360 гр', price: '80 000', desc: 'корнишоны, черри, патисон, грибы, мини кукуруза, острые перчики' },
                { name: 'ОВОЩНОЕ АССОРТИ', weight: '220 гр', price: '70 000', desc: 'свеж огурцы, помидор, болгарский перец лук, зелень' },
                { name: 'СЕЛЕДОЧКА С КАРТОФЕЛЕМ', weight: '100 гр', price: '60 000', desc: 'сельд, картофель, лук, зеленый горошек' },
                { name: 'ОЛИВКИ И МАСЛИНЫ', weight: '200 гр', price: '50 000' },
                { name: 'ЧАККА - СУЗЬМА', weight: '300 гр', price: '50 000', desc: 'традиционный узбекский кисломолочный продукт' },
                { name: 'ЗАКУСКА ИЗ БАКЛАЖАНОВ', weight: '300 гр', price: '60 000' },
            ]
        },
        barbecue: {
            title: language === 'ru' ? 'ШАШЛЫКИ' : 'BARBECUE',
            items: [
                { name: 'ГОВЯДИНА КУСКОВАЯ', weight: '1порц', price: '130 000' },
                { name: 'БАРАНИНА КУСКОВАЯ', weight: '1 порц', price: '130 000' },
                { name: 'КУФТА - ЛЮЛЯ КЕБАБ', weight: '1 порц', price: '80 000' },
                { name: 'РУЛЕТ СУЗАНГАРОН', weight: '1 порц', price: '140 000' },
                { name: 'БЕДРО КУРИЦЫ НА МАНГАЛЕ', weight: '1 порц', price: '120 000' },
                { name: 'ОВОЩИ НА МАНГАЛЕ', weight: '330 гр', price: '60 000' },
                { name: 'КОЛБАСКИ АССОРТИ', weight: '330гр', price: '145 000' },
            ]
        },
        salads: {
            title: language === 'ru' ? 'САЛАТЫ' : 'SALADS',
            items: [
                { name: 'ЧУПОНЧА', weight: '220 гр', price: '65 000', desc: 'помидоры, огурцы, сузьма, зелень' },
                { name: 'СТЕЙК САЛАТ', weight: '200 гр', price: '120 000', desc: 'микс салата, руколла, черри, бон филе, франц соус' },
                { name: 'РУКОЛЛА С КРЕВЕТКАМИ', weight: '250 гр', price: '140 000', desc: 'руколла, черри, перец болгарсикй, креветки, пармезан, франц соус' },
                { name: 'ЦЕЗАРЬ С КУРИЦЕЙ ФИЛЕ', weight: '280 гр', price: '90 000', desc: 'кур.филе, айсберг. Черри, перепелиные яйца, пармезан, соус цезарь' },
                { name: 'ЦЕЗАРЬ С КРЕВЕТКАМИ', weight: '220 г', price: '140 000', desc: 'креветки, айсберг, черри, перепелиные яйца, пармезан, соус цезарь' },
                { name: 'ГРЕЧЕСКИЙ', weight: '250 гр', price: '85 000', desc: 'помидоры,огурцы, болгарский перец, сыр фетакса' },
                { name: 'РУККОЛА С МИНИ МОЦАРЕЛОЙ', weight: '220 гр', price: '85 000', desc: 'руккола, черри, болгарский перец, моцарелла, гранатовый соус' },
                { name: 'КАПРЕЗА', weight: '250 гр', price: '110 000', desc: 'моцарелла, помидоры, руккола, соус песто, кедровые орешки' },
                { name: 'ХРУСТЯШИЙ БАКЛАЖАН', weight: '250 гр', price: '95 000', desc: 'хрустящий баклажан, помидоры, сыр креметто, руккола, соус от шефа' },
                { name: 'БУРАТТА', weight: '200гр', price: '115 000', desc: 'сыр буратта, руккола, черри, песто, французкая заправка' },
                { name: 'ВЕГЕТАРИАНСКИЙ С КРЕМЕТТОЙ', weight: '200гр', price: '70 000', desc: 'микс салата, руколла, черри, сыр креметто, медогорчичный соус, орехи' },
                { name: 'ШАКАРОБ', weight: '220 гр', price: '60 000', desc: 'помидор, красный лук' },
            ]
        },
        garnish: {
            title: language === 'ru' ? 'ГАРНИРЫ' : 'GARNISHES',
            items: [
                { name: 'КАРТОФЕЛЬ ФРИ', weight: '170 гр', price: '60 000' },
                { name: 'КАРТОФЕЛЬ ПО ДЕРЕВЕНСКИ', weight: '200 гр', price: '60 000' },
                { name: 'КАРТОФЕЛЬ ПЮРЕ', weight: '200гр', price: '60 000' },
                { name: 'ОВОЩИ ГРИЛЬ', weight: '200гр', price: '60 000' },
                { name: 'РИС', weight: '170гр', price: '60 000' },
            ]
        },
        desserts: {
            title: language === 'ru' ? 'ДЕСЕРТЫ' : 'DESSERTS',
            items: [
                { name: 'САНСЕБАСТЬЯН', weight: '1 шт', price: '80 000', desc: 'клубника, манго, банан, киви на выбор' },
                { name: 'МОРОЖЕННОЕ В АССОРТИМЕНТЕ', weight: '1 шт', price: '45 000' },
                { name: 'ФРУКТОВОЕ АССОРТИ', weight: '', price: '50 000', desc: 'Арбуз, Дыня' },
                { name: 'НАПОЛЕОН', weight: '1шт', price: '60 000' },
                { name: 'ЧИЗКЕЙК ШОКОЛАДНЫЙ', weight: '1ШТ', price: '60 000' },
                { name: 'ЧИЗКЕЙК КЛАССИЧЕСКИЙ', weight: '1ШТ', price: '60 000' },
                { name: 'МЕДОВИК', weight: '1ШТ', price: '60 000' },
                { name: 'ШТРУДЕЛЬ', weight: '1ШТ', price: '70 000' },
            ]
        }
    }

    // Цитаты для фото
    const quotes = [
        {
            text: language === 'ru' ? 'Добро пожаловать в мир восточного гостеприимства' : 'Welcome to the world of Eastern hospitality',
            author: 'SUZANGARON'
        },
        {
            text: language === 'ru' ? 'Где еда, там и счастье' : 'Where there is food, there is happiness',
            author: 'Восточная мудрость'
        },
        {
            text: language === 'ru' ? 'В каждом блюде — частица души' : 'In every dish - a piece of soul',
            author: 'Традиции Бухары'
        },
        {
            text: language === 'ru' ? 'Вкус, который запоминается навсегда' : 'A taste that is remembered forever',
            author: 'SUZANGARON'
        }
    ]

    const menuEntries = Object.entries(menuData)
    // Позиции: 0 - после супов (фото 5), 2 - после европейской (фото 1), 5 - после шашлыков (фото 2), 8 - после десертов (фото 3)
    const photoPositions = [0, 2, 5, 8]

    return (
        <div className="print-page">
            <div className="print-controls">
                <div className="print-controls-content">
                    <Link href="/" className="btn-back">
                        <FaHome /> {language === 'ru' ? 'На главную' : 'Home'}
                    </Link>
                    <button onClick={handlePrint} className="btn-print">
                        <FaPrint /> {language === 'ru' ? 'Печать меню' : 'Print Menu'}
                    </button>
                </div>
            </div>

            <div className="print-content" id="print-content">
                <div className="print-border print-border-top"></div>
                
                <div className="print-header">
                    <div className="print-header-content">
                        <div className="print-logo">
                            <div className="print-logo-image">
                                <Image
                                    src="/images/logo.PNG"
                                    alt="Suzangaron"
                                    width={70}
                                    height={70}
                                    className="print-logo-img"
                                    priority
                                />
                            </div>
                            <div className="print-logo-text-wrapper">
                                <h1 className="print-logo-text">SUZANGARON</h1>
                                <div className="print-logo-sub">RESTAURANT & TERRACE</div>
                            </div>
                        </div>
                        
                        <div className="print-divider">
                            <span className="print-divider-line"></span>
                            <span className="print-divider-icon">✦</span>
                            <span className="print-divider-line"></span>
                        </div>
                        
                        <div className="print-info">
                            <span><FaMapMarkerAlt /> Bukhara, Uzbekistan</span>
                            <span><FaPhone /> +998 91 922 2900</span>
                            <span><FaClock /> 11:00 – 03:00</span>
                        </div>
                        
                        <div className="print-subtitle">
                            {language === 'ru' ? 'Ресторан и терраса с панорамным видом на Старую Бухару' : 'Restaurant & Terrace with panoramic view of Old Bukhara'}
                        </div>
                        <div className="print-cuisine">
                            <FaUtensils /> {language === 'ru' ? 'Узбекская и европейская кухня' : 'Uzbek & European Cuisine'}
                        </div>
                    </div>
                </div>

                <div className="print-menu">
                    <div className="print-menu-title-wrapper">
                        <div className="print-menu-decoration">❧</div>
                        <h2 className="print-menu-title">
                            {language === 'ru' ? 'Меню' : 'Menu'}
                        </h2>
                        <div className="print-menu-decoration">❧</div>
                    </div>

                    {menuEntries.map(([key, section], index) => {
                        const showPhoto = photoPositions.includes(index)
                        let photoIndex = photoPositions.indexOf(index)
                        let photoNumber = photoIndex + 1
                        
                        // Фото 5 для первой позиции (после супов)
                        if (index === 0) {
                            photoNumber = 5
                        }
                        
                        const quote = quotes[photoIndex] || quotes[0]
                        
                        return (
                            <div key={key}>
                                <div className="print-section">
                                    <div className="print-section-header">
                                        <div className="print-section-line"></div>
                                        <h3 className="print-section-title">{section.title}</h3>
                                        <div className="print-section-line"></div>
                                    </div>
                                    <div className="print-items">
                                        {section.items.map((item, idx) => (
                                            <div key={idx} className="print-item">
                                                <div className="print-item-info">
                                                    <div className="print-item-name">
                                                        {item.name}
                                                        {item.desc && (
                                                            <span className="print-item-desc"> — {item.desc}</span>
                                                        )}
                                                    </div>
                                                    <div className="print-item-weight">{item.weight}</div>
                                                </div>
                                                <div className="print-item-price">{item.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {showPhoto && (
                                    <div className="print-photo-section">
                                        <div className="print-photo-wrapper">
                                            <div className="print-photo-container">
                                                <Image
                                                    src={`/images/print/${photoNumber}.png`}
                                                    alt={`Interior ${photoNumber}`}
                                                    width={800}
                                                    height={photoNumber === 3 ? 300 : 400}
                                                    className="print-photo-image"
                                                    priority
                                                />
                                                <div className="print-photo-overlay">
                                                    <FaQuoteLeft className="print-quote-icon" />
                                                    <p className="print-photo-quote">{quote.text}</p>
                                                    <p className="print-photo-author">— {quote.author}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="print-footer">
                    <div className="print-footer-decoration">
                        <span className="print-footer-dot"></span>
                        <span className="print-footer-dot"></span>
                        <span className="print-footer-dot"></span>
                    </div>
                    <p className="print-footer-text">
                        {language === 'ru' ? 'Спасибо за посещение!' : 'Thank you for visiting!'}
                    </p>
                    <p className="print-footer-small">
                        {language === 'ru' ? 'Приятного аппетита!' : 'Bon appetit!'}
                    </p>
                    <div className="print-footer-line"></div>
                </div>

                <div className="print-border print-border-bottom"></div>
            </div>
        </div>
    )
}