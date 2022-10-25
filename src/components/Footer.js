import React from "react";
import {FunctionOpenInNewTab} from "radium-omnibus"

const Footer = () => {
    return (
        <div className=" my-12 bg-gray-500 mb-auto">
            <a href="/">
        <div className="text-2xl py-8 text-gray-300 text-center">
          <div>Back To HomePage</div>
        </div>
      </a>
            <div className=" grid grid-cols-3 justify-items-center py-8 border-0">
            <div>
                <div>
                    <div className="pb-10">
                        <h4 className="font-bold text-lg">Addresses</h4>
                        <ul className="list-unstyled py-3">
                        <a href="https://www.google.co.th/maps/place/10%2F446+%E0%B8%99%E0%B8%A7%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C+%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%87+%E0%B8%99%E0%B8%A7%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C+%E0%B9%80%E0%B8%82%E0%B8%95+%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B8%E0%B9%88%E0%B8%A1+%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3+10230/@13.7987305,100.6440417,18.5z/data=!4m5!3m4!1s0x311d62407c0ff761:0x5797ea21dd9c2373!8m2!3d13.7987061!4d100.6447055?hl=th" target="_blank">
                            <li className="text-neutral-300">Nawamin 93,</li>
                            <li className="text-neutral-300">Bueng-Kum District,</li>
                            <li className="text-neutral-300">Bangkok,Thailand 10240</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pb-10">
                        <h4 className="font-bold text-lg">Email & Phone</h4>
                        <ul className="list-unstyled py-3">
                            <a className="text-neutral-300" href="mailto:rieweiam403@gmail.com">rieweiam403@gmail.com</a>
                            <div className="py-2">
                            <a className="text-neutral-300" href="tel:098-592-8839">098-592-8839</a>
                            </div>
                        </ul>
                    </div>
            <div className="pb-10">
            <h4 className="font-bold text-lg">Social Contact</h4>
            <ul className="list-unstyled py-3">
                <div className="flex">
                            <a href="https://www.facebook.com/Riew.Ohyeah/" target="_blank">
                            <img className="w-6 h-6" src="./Facebook_Logo_(2019).png"/>
                            </a>
                            <a href="https://www.instagram.com/rohykwa_/" target="_blank">
                            <img className="w-6 h-6 mx-4" src="./iglogo.png" />
                            </a>
                            </div>
                       
                            
                        </ul>
            </div>
            </div>
        </div>
    );
  };
  export default Footer;