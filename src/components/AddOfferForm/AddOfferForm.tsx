import { useEffect, useState } from "react";
import { Dropdown } from "../Dropdown";
import "./AddOfferForm.css";
import { voivodeshipList, districtList, serviceList } from "./data";
import {AiOutlinePlus} from "react-icons/ai";

export const AddOfferForm = () => {
     return (
        <div className="addOffer">
            <div className="addOffer__container flex__center">
                <div className="content addOffer__content bg__white flex">
                    <div className="content--center">
                            <div className="title addOffer__title">Dodaj ofertę pomocy</div>
                            <div className="addOffer__lists flex">
                                <Dropdown
                                    label="województwo"
                                    options={voivodeshipList}
                                />
                                <Dropdown
                                    label="powiat"
                                    options={districtList}
                                />
                                <Dropdown
                                    label="pomoc"
                                    options={serviceList}
                                />
                            </div>
                            <div className="addOffer__description">
                                <textarea
                                    placeholder="Opis"
                                />
                            </div>
                            <div className="addOffer__images flex">
                                <div className="addOffer__images--content flex__center">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="input__click"
                                    />
                                    <AiOutlinePlus color="#fff" size={25} />
                                </div>
                                <div className="addOffer__images--info">
                                    <p>Dodaj zdjęcia</p>
                                </div>
                            </div>
                            <input type="submit" className="form__btn addOffer__btn" value="Dodaj ofertę"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
