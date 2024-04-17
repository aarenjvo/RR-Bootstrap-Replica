import React from 'react'
import '../App.css'

function HeroContainer() {
    return (
        <div id="heroContainer">
            <div id='selectCountryWrap'>
                <div id='selectCountry'>
                    <object data="https://www.instacart.com/assets/growth/landing/locations_page/us_flag-ba87db09d555f6ca56f88b49567659e9fcd51d5083d312e1040464ab996900c1.svg" aria-label="United States" type="image/svg+xml" tabindex="-1" aria-hidden="true" className="e-e9cz0w">United States</object>
                    <select data-testid="country_chooser" name="country_alpha_2" aria-label="Choose your country. This action refreshes the page." class="e-1x2dz2i"><option value="US" aria-label="United States">US</option><option value="CA" aria-label="Canada">CA</option></select>
                </div>
            </div>
            <div id='heroText'>
                <h1 id='heroH1Tag'>Order groceries for delivery or pickup today</h1>
                <p id='heroPTag'>Whatever you want from local stores, brought right to your door.</p>
            </div>
        </div>
    )
}

export default HeroContainer