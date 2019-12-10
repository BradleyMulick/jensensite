import React from 'react'
import './index.css';

const GalleryHome = () => {
    return (
        <div className='gallery-home'>
                <div className="row">
                    <div className="column">
                        <img src="https://lh3.googleusercontent.com/KARqN171mUeo0RqT18TCmLr1uLCtO_N1QA8yIuPDz92IAGAFyUpvg2R7vTo=w2400" onclick="openModal();currentSlide(1)" />
                        <img src="https://lh3.googleusercontent.com/RYwYzWLRs6lYUkFqidHEcJMuqYTLfcGz3_4SyynAJTVnVLoshLh7-BMqOq0=w2400" onclick="openModal();currentSlide(3)" />
                        <img onContextMenu={(e)=> e.preventDefault()} src="https://lh5.googleusercontent.com/FaMaNkrEU0SufTNYDtrhZLdxg0eb7GMmEaJN6AUKdYPROqOATMLrEpumAn4=w2400" onclick="openModal();currentSlide(3)" /> 
                        <img src="https://lh3.googleusercontent.com/tq8Nw43CHdbdwNJtq9LlNyibTXF3IyX2m6vUIxNBUx3igOas09t5YoqQxGU=w2400" onclick="openModal();currentSlide(5)" />
                        <img src="https://lh3.googleusercontent.com/6oGFDlZskVcRdsLTWqeJMPZn85knH-gvj9XrY-zDLwXv2OYOIKFs5UcTy1w" onclick="openModal();currentSlide(5)" />
                        <img src="https://lh3.googleusercontent.com/jeKutJI50udixZnTwimmn9vpCi1TO-i5YVzBRPTEEOP02EowsohEjbXfVPw=w2400" />
                        
                        <img src="https://lh6.googleusercontent.com/RtiS6sG95IzSsL769ffX-r8qNSk5saGoVXlXP99_8-OvnM2S_OihHGjY1uw=w2400" />
                        <img src="https://lh3.googleusercontent.com/0lW5NgEIxbw_dfcvXCFel0bS62NcxYl8x-kN7vc9IhsVx_k1cUOCQyNAzO4" />
                        <img src="https://lh4.googleusercontent.com/6pr5MTucT0w16Pk4ShTsIbhtbSxBUKaNjCvB_t_wLYVm1kr4cMtfb_d1t94" />
                        <img src="https://lh3.googleusercontent.com/IXKiGkHJULRz_F0ab3bNN48C86XZuFNqxQNXe3n5hwy-G-2xvZ6psu_2fok" />
                        <img src="https://lh6.googleusercontent.com/AXbrOTrejInO-yhwu2c4j7rmZpMgYwUvzKHMmMleUIxO_OWIa2Hnfu_e7M8" />
                        <img src="https://lh4.googleusercontent.com/MIYGiO0ZPInTHbjNMmasnxihN9fGwkEFz-2UGzlfVyoUGnJVr-TlqTLuZlw" />
                        <img src="https://lh5.googleusercontent.com/hnPBu1Rp0Zceequ0loxoGTU81IE3J8Vbo5qC9AU_C69SG6kbI_xAUkt34HA" />
                        <img src="https://lh4.googleusercontent.com/Lb_t93Fj8unGlt80qNTBzZHgh_iv11g4SQR0_u7dlhgrjGt4h6wuCs81Gyw" />
                        <img src="https://lh5.googleusercontent.com/usshMsJ5-OiZ1XpUM4UogJAoXcC8VYirKiBs7ODqG4yRHkO6yD-Cwr4ZRYQ" />
                    </div>
        
				    <div className="column">
                        <img onContextMenu={(e)=> e.preventDefault()} src="https://lh5.googleusercontent.com/ibRNFX51DNOZsfOLEn_e7ePdj_Y3P_CQnWY6dasWKtGkeCcikY7pUlDv90A=w2400"  onclick="openModal();currentSlide(1)" />
                        <img onContextMenu={(e)=> e.preventDefault()} src="https://lh4.googleusercontent.com/Cx88ukoC7lJEr-NRJttzQfy3_6MUV8F8wLnUZhdXO9dQd-XD51CxdMXBNhg"  onclick="openModal();currentSlide(1)" /> 
                        <img src="https://lh4.googleusercontent.com/CgI3KoUUjZz-arNovXvfa_ZfA3POElAdhWv7sn94cQJYlPUephBbANkSWJ4=w2400" onclick="openModal();currentSlide(5)" />
                        <img src="https://lh6.googleusercontent.com/8EQHgO6EPVVxs4pHHLUXO7fJqvUf-Hx4ZevmlgLnixrd4O0ETuPW78Td5Fc=w2400" />
                        <img src="https://lh4.googleusercontent.com/6pr5MTucT0w16Pk4ShTsIbhtbSxBUKaNjCvB_t_wLYVm1kr4cMtfb_d1t94=w2400" />
                        <img src="https://lh4.googleusercontent.com/fTQKjiWTaglwsAUEFEBM78ROoltZa-yAuiUpJh5yqyyqer-Sz0Nm2vlZdhY=w2400" />
                        <img src="https://lh6.googleusercontent.com/XLFJ6HO8FdXssXHocRM6Un9Bxz7uOA_jEwoY2saNuwLe_yzJqysWlaRzFCk" />
                        <img src="https://lh5.googleusercontent.com/PwIuGqOgWi-DxEymyXGhBBj8p9xj987PovWq7DDmnR-xCQHtEZ_Wrp5nNMU" />
                        <img src="https://lh5.googleusercontent.com/Vd_Zr5OHmoAeD1-C8tUZe71_MQsLEpCP-L_Do5oGd_5Gq19IuTKI3zKHuNM" />
                        <img src="https://lh4.googleusercontent.com/E2MbQGX9Mizsbi6j1baWqQJmic-Nbc6vQsVmRtm3836wJiIptWrtu3sJWHI" />
                        <img src="https://lh4.googleusercontent.com/gFsI-Mxju1xTEXpPlUy5VDgCE2P5yXdSb2G2zGUv72hxKjToJHT2eYcjWR8" />
                        <img src="https://lh5.googleusercontent.com/AVBo7vlnhI9CmG6NjQ2d2EhebD5lYLeq3DfB4thvAfSTOY6CKqeQC4wwx7g" />
                        <img src="https://lh4.googleusercontent.com/WytcV10XuhI-qBhoWVhU8VY0cAnaRXcGDP1ryi4XXhNPouwbIcsWuz0qjhw" />
                        <img src="https://lh6.googleusercontent.com/CPa7gwspwKQxO98IyCVLU-tP2RXM780JhW2vNdFhKhBquxJCyRbfvCna8CI" />
                        
				    </div>
			    </div>
		    </div>
        
    )
}

export default GalleryHome