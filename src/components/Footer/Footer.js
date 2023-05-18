import React from 'react'
import './footer.scss'
import logo from '../../images/image-logo.svg'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='container'>
                <div className='footer'>
                    <div className='item social-media'>
                        <div className='logo'>
                            <img src={logo} alt="logo" />
                            <h2>Tello</h2>
                        </div>
                    </div>
                    <ul className='item'>
                        <h3>Menu</h3>
                        <li>
                            <a href="/">Yeni</a>
                        </li>
                        <li>
                            <a href="/">Endirimlər</a>
                        </li>
                        <li>
                            <a href="/">Aksessuarlar</a>
                        </li>
                        <li>
                            <a href="/">Bütün brendlər</a>
                        </li>
                    </ul>
                    <ul className='item'>
                        <h3>Kömək</h3>
                        <li>
                            <a href="/">Tez-tez soruşulan suallar</a>
                        </li>
                        <li>
                            <a href="/">Çatdırılma xidməti</a>
                        </li>
                        <li>
                            <a href="/">Geri qaytarılma şərtləri</a>
                        </li>
                    </ul>
                    <ul className='item'>
                        <h3>Əlaqə</h3>
                        <li>
                            <a href="/">M. K. Ataturk avenue 89, Baku, Azerbaijan</a>
                        </li>
                        <li>
                            <a href="/">example@gmail.com</a>
                        </li>
                        <li>
                            <a href="/">*2108</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='sub-footer'>
                <div className='container'>
                    <div className='sub-footer_block'>
                        <p>Tello 2021. Bütün hüquqlar qorunur.</p>
                        <ul>
                            <li>
                                <a href="/">Qaydalar və şərtlər</a>
                            </li>
                            <li>
                                <a href="/">Məxfilik siyasəti</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
