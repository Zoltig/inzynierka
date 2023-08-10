import "./SettingsWindowVol.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SettingsWindowVol = () => {
    const [isNewNotifications, setIsNewNotifications] = useState<boolean>(false);
    const [isAcceptedNotifications, setIsAcceptedNotifications] = useState<boolean>(false);


    const handleNewNotificationsChange = () => {
        const updatedValue = !isNewNotifications;
        setIsNewNotifications(updatedValue);
    };
    
    const handleAcceptedNotificationsChange = () => {
        const updatedValue = !isAcceptedNotifications;
        setIsAcceptedNotifications(updatedValue);
    };
    
    const handleSaveChanges = () => {
        localStorage.setItem("newNotifications__vol", isNewNotifications.toString());
        localStorage.setItem("acceptedNotifications__vol", isAcceptedNotifications.toString());

        toast.success("Zapisano zmiany", {
            position: toast.POSITION.TOP_CENTER
          });
    };


    useEffect(() => {
        const newNotificationsValue = localStorage.getItem("newNotifications__vol");
        const acceptedNotificationsValue = localStorage.getItem("acceptedNotifications__vol");
    
        if (newNotificationsValue !== null) {
            setIsNewNotifications(newNotificationsValue === "true");
        }
    
        if (acceptedNotificationsValue !== null) {
            setIsAcceptedNotifications(acceptedNotificationsValue === "true");
        }
    }, []);
    
    
    return(
        <div className="settings">
            <div className="settings__container flex__center">
                <div className="content settings__content bg__white flex">
                    <div className="content--center">
                        <div className="title settings__title">Ustawienia</div>
                        <div className="settings__noti flex">
                            <div className="noti__title">Powiadomienia</div>
                            <label className="flex">
                            <input type="checkbox" className="settings__checkbox--new" checked={isNewNotifications} onChange={handleNewNotificationsChange}/>
                            &nbsp;O nowych potrzebach
                            </label>
                            <label className="flex">
                            <input type="checkbox" className="settings__checkbox--accept" checked={isAcceptedNotifications} onChange={handleAcceptedNotificationsChange}/>
                            &nbsp;O przyjętych ofertach pomocy
                            </label>
                            <div className="settings__noti--btn flex__center" onClick={handleSaveChanges}><a className="btn">Zapisz zmiany</a><ToastContainer /></div>
                        </div>
                        <div className="settings__account">
                            <div className="account__title">Konto</div>
                            <div className="settings__account--content">
                                <Link to="/zmiana_hasla">
                                    <div className="settings__account--btn flex__center btn">
                                        Zmień hasło
                                    </div>
                                </Link>
                                <Link to="/">
                                    <div className="settings__logout--btn flex__center btn">
                                        Wyloguj się
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}