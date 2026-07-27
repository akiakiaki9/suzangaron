// src/app/en/print/page.js
'use client'

import { useState, useEffect } from 'react'
import { FaPrint, FaHome, FaPhone, FaMapMarkerAlt, FaClock, FaUtensils, FaQuoteLeft } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import '../../print/print.css'

export default function EnglishPrintPage() {
    const [language, setLanguage] = useState('en')

    useEffect(() => {
        setLanguage('en')
    }, [])

    const handlePrint = () => {
        window.print()
    }

    const menuData = {
        soups: {
            title: 'SOUPS',
            items: [
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
            title: 'EASTERN CUISINE',
            items: [
                { name: 'SUZANGARON PILAF', weight: '1 serving', price: '65,000' }, // Цена изменена на 65,000
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
            title: 'EUROPEAN CUISINE',
            items: [
                { name: 'RATATOUILLE', weight: '500 g', price: '65,000', desc: 'beef, eggplant, tomato, wine sauce' }, // Добавлен Рататуй
                { name: 'VARAKHSHA', weight: '300 g', price: '75,000', desc: 'beef, tomato, garlic' }, // Добавлен Варахша
                { name: 'LAMB CHEHOLBEN', weight: '350 g', price: '85,000', desc: 'lamb, onion, tomato, pepper, herbs, garlic' }, // Добавлена Баранина чехолбен
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
            title: 'PASTAS',
            items: [
                { name: 'FETTUCCINE ALFREDO', weight: '320 g', price: '95,000' },
                { name: 'TAGLIATELLE BONFILE', weight: '380 g', price: '110,000' },
                { name: 'FETTUCCINE NEOPOLITANO', weight: '350 g', price: '80,000' },
            ]
        },
        coldAppetizers: {
            title: 'COLD APPETIZERS',
            items: [
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
            title: 'SHASHLIKS',
            items: [
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
            title: 'SALADS',
            items: [
                { name: 'SUZANGARON SALAD', weight: '350 g', price: '85,000', desc: 'arugula 60g, cherry tomatoes 30g, cucumber 20g, champignons 20g, bell pepper 20g, red onion 10g, parmesan cheese 15g, meat 100g, sauce 50g, mini corn 15-20g' }, // Добавлен салат
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
            title: 'SIDE DISHES',
            items: [
                { name: 'FRENCH FRIES', weight: '170 g', price: '60,000' },
                { name: 'COUNTRY-STYLE POTATOES', weight: '200 g', price: '60,000' },
                { name: 'MASHED POTATOES', weight: '200 g', price: '60,000' },
                { name: 'GRILLED VEGETABLES', weight: '200 g', price: '60,000' },
                { name: 'RICE', weight: '170 g', price: '60,000' },
            ]
        },
        desserts: {
            title: 'DESSERTS',
            items: [
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

    // Quotes for photos in English
    const quotes = [
        {
            text: 'Welcome to the world of Eastern hospitality',
            author: 'SUZANGARON'
        },
        {
            text: 'Where there is food, there is happiness',
            author: 'Eastern Wisdom'
        },
        {
            text: 'In every dish - a piece of soul',
            author: 'Traditions of Bukhara'
        },
        {
            text: 'A taste that is remembered forever',
            author: 'SUZANGARON'
        }
    ]

    const menuEntries = Object.entries(menuData)
    // Positions: 0 - after soups (photo 5), 2 - after european (photo 1), 5 - after barbecue (photo 2), 8 - after desserts (photo 3)
    const photoPositions = [0, 2, 5, 8]

    return (
        <div className="print-page">
            <div className="print-controls">
                <div className="print-controls-content">
                    <Link href="/en" className="btn-back">
                        <FaHome /> Home
                    </Link>
                    <button onClick={handlePrint} className="btn-print">
                        <FaPrint /> Print Menu
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
                            Restaurant & Terrace with panoramic view of Old Bukhara
                        </div>
                        <div className="print-cuisine">
                            <FaUtensils /> Uzbek & European Cuisine
                        </div>
                    </div>
                </div>

                <div className="print-menu">
                    <div className="print-menu-title-wrapper">
                        <div className="print-menu-decoration">❧</div>
                        <h2 className="print-menu-title">Menu</h2>
                        <div className="print-menu-decoration">❧</div>
                    </div>

                    {menuEntries.map(([key, section], index) => {
                        const showPhoto = photoPositions.includes(index)
                        let photoIndex = photoPositions.indexOf(index)
                        let photoNumber = photoIndex + 1
                        
                        // Photo 5 for first position (after soups)
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
                    <p className="print-footer-text">Thank you for visiting!</p>
                    <p className="print-footer-small">Bon appetit!</p>
                    <div className="print-footer-line"></div>
                </div>

                <div className="print-border print-border-bottom"></div>
            </div>
        </div>
    )
}