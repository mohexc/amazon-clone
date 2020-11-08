import React from 'react'
import './AppHeader.less'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";


const AppHeader = () => {
    return (
        <div className="app-header">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="app-header-logo" />
            <div className="app-header-search">
                <input type="text" className="app-header-searchInput" />
                <BsSearch className="app-header-searchIcon" />
            </div>
            <div className="app-header-nav">
                <div className="app-header-option">
                    <span className="app-header-optionLineOne">Hello Guest</span>
                    <span className="app-header-optionLineTwo">Sign In</span>
                </div>
                <div className="app-header-option">
                    <span className="app-header-optionLineOne">Returns</span>
                    <span className="app-header-optionLineTwo">& Orders</span>
                </div>
                <div className="app-header-option">
                    <span className="app-header-optionLineOne">Your</span>
                    <spab className="app-header-optionLineTwo">Prime</spab>
                </div>
                <div className="app-header-optionBasket">
                    <AiOutlineShoppingCart style={{ fontSize: "2rem" }} />
                    <span className="app-header-optionLineTwo app-header-basketCount">0</span>
                </div>

            </div>
        </div>
    )
}

export default AppHeader
