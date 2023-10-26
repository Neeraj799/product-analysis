import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faGaugeHigh,
    faFileLines,
    faCartShopping,
    faUser,
    faGear,
    faCaretDown
  } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";



function Header() {
    const [reportsDropdownVisible, setReportsDropdownVisible] = useState(false);
    const [settingsDropdownVisible, setSettingsDropdownVisible] = useState(false);
  
    const toggleReportsDropdown = () => {
      setReportsDropdownVisible(!reportsDropdownVisible);
    };
  
    const toggleSettingsDropdown = () => {
      setSettingsDropdownVisible(!settingsDropdownVisible);
    };


  return (
    
    <div className={style.header}>
      <div className={style.left}>
        <a href="">
          <h2>PRODUCT ADMIN</h2>
        </a>
      </div>
      <div className={style.center}>
      <a href="">
      <FontAwesomeIcon icon={faGaugeHigh} className={style.gaugeicon} /> 
      <span className= {style.headername1}> Dashboard </span>
      </a>
      
      <a href="#" onClick={toggleReportsDropdown}>
      <FontAwesomeIcon icon={faFileLines} className={style.fileicon} />
      <span className= {style.headername2}> Reports </span>
      <FontAwesomeIcon icon={faCaretDown} className={style.dropdownicon1}/>
      {reportsDropdownVisible && (
          <div className={style.dropDownMenu}>
            <ul>
              <li> Daily Report </li>
              <li> Weekly Report </li>
              <li> Yearly Report </li>
            </ul>

          </div>
          )}
      </a>

      <a href="">
      <FontAwesomeIcon icon={faCartShopping} className={style.carticon} />
      <span className= {style.headername3}> Products </span>
      </a>

      <a href="">
      <FontAwesomeIcon icon={faUser}  className={style.usericon} />
      <span className= {style.headername4}> Accounts </span>
      </a>

      <a href="#" onClick={toggleSettingsDropdown}>
      <FontAwesomeIcon icon={faGear} className={style.settingsicon} />
      <span className= {style.headername5}> Settings </span>
      <FontAwesomeIcon icon={faCaretDown} className={style.dropdownicon2}/>
      {settingsDropdownVisible && (
        <div className={style.dropDownMenu}>
          <ul>
            <li> Profile </li>
            <li> Billing </li>
            <li> Customize </li>
          </ul>
        </div>
      )}
      </a>

      <a  className={style.headername6}      href="">
      <span className= {style.headername7}> Admin, </span>
      <span className={style.headername8}> Logout </span>
      </a>
      

      
      
      </div>
    
    </div>
  );
}

export default Header;
