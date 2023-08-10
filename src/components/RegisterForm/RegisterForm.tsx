import "./RegisterForm.css";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type FormData = {
    firstName: string;
    lastName: string;
    name: string;
    password: string;
    email: string;
    pesel?: string;
    document?: string;
    selectedOption: string;
}

export const RegisterForm = () => {
    const schema: ZodType<FormData> = z.object({
        firstName: z.string().min(2, "Imię musi mieć co najmniej 2 litery").max(30).regex(/^[A-Za-z]+$/, "Pole może zawierać wyłącznie litery"),
        lastName: z.string().min(2, "Nazwisko musi mieć co najmniej 2 litery").max(30).regex(/^[A-Za-z]+$/, "Pole może zawierać wyłącznie litery"),
        name: z.string().min(3, "Nazwa użytkownika musi mieć co najmniej 3 znaki").max(30).regex(/^[A-Za-z0-9_]+$/, "Pole może zawierać wyłącznie litery, cyfry lub znak '_' "),
        password: z.string().min(5, "Hasło musi mieć co najmniej 5 znaków").max(20).regex(/^[A-Za-z0-9!@#$]+$/, "Pole może zawierać wyłącznie litery, cyfry lub znaki ! @ # $ "),
        email: z.string().email("Pole musi zawierać znak @").regex(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/, "Pole musi być w formacie xyz@xyz.xyz"),
        pesel: z.string().min(11, "Pole musi zawierac dokładnie 11 cyfr").max(11).regex(/^\d{11}$/, "Pole mooże zawierać wyłącznie cyfry").optional().or(z.literal('')),
        document: z.string().min(9, "Pole musi zawierać dokładnie 9 znaków").max(9).regex(/^(?:[A-Z]{3}[0-9]{6}|[A-Z]{2}[0-9]{7})$/, "Pole musi być w formacie XYZ000000 lub XY0000000").optional().or(z.literal('')),
        selectedOption: z.string().refine(value => ['volunteer', 'refugee'].includes(value)),
    });

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({ resolver: zodResolver(schema)});

    const [selectedOption, setSelectedOption] = useState<boolean>(false);
    
    const submitData = (data: FormData) => {
        console.log("Wyslano", data)
    }

    return(
        <div className="register">
            <div className="container--right flex">
                <div className="content register__content bg__white flex">
                    <div className="content--right">
                        <div className="title register__title">Rejestracja</div>
                        <form className="register__form flex" onSubmit={handleSubmit(submitData)}>
                            <label className="form__label">Imię*</label>
                            <input type="text" className="form__input" maxLength={20} {...register("firstName")} />
                            {errors.firstName && <p className="error__message"> {errors.firstName.message}</p>}
                            <label className="form__label">Nazwisko*</label>
                            <input type="text" className="form__input" maxLength={20} {...register("lastName")} />
                            {errors.lastName && <p className="error__message"> {errors.lastName.message}</p>}
                            <label className="form__label">Nazwa użytkownika*</label>
                            <input type="text" className="form__input" maxLength={30} {...register("name")} />
                            {errors.name && <p className="error__message"> {errors.name.message}</p>}
                            <label className="form__label">Hasło*</label>
                            <input type="password" className="form__input" maxLength={20} {...register("password")} />
                            {errors.password && <p className="error__message"> {errors.password.message}</p>}
                            <label className="form__label">Email*</label>
                            <input type="email" className="form__input" maxLength={20} {...register("email")} />
                            {errors.email && <p className="error__message"> {errors.email.message}</p>}
                            <div className="register__radiobuttons flex__center">
                                <label className="flex__center" onClick={() => setSelectedOption(false)}>
                                    <input type="radio" className="register__radiobutton" value="volunteer" checked={selectedOption === false} {...register('selectedOption')} />
                                    &nbsp;Wolontariusz
                                </label>
                                <label className="flex__center" onClick={() => setSelectedOption(true)}>
                                    <input type="radio" className="register__radiobutton" value="refugee" checked={selectedOption === true} {...register('selectedOption')}/>
                                    &nbsp;Uchodźca
                                </label>
                                {errors.selectedOption && <p className="error__message">{errors.selectedOption.message}</p>}
                            </div>
                            <div className="register__form--condition flex">
                                <div className={`register__form--pesel flex ${selectedOption && "switch"}`}>
                                    <label className="form__label">Numer Pesel</label>
                                    <input type="text" className="form__input" maxLength={11} {...register("pesel")} onKeyPress={(e) => { const charCode = e.charCode || e.keyCode; 
                                    if (charCode < 48 || charCode > 57) 
                                        { e.preventDefault();}
                                        }}/>
                                    {errors.pesel && <p className="error__message"> {errors.pesel.message}</p>}
                                </div>
                                <div className={`register__form--document flex ${selectedOption && "switch"}`}>
                                    <label className="form__label">Numer dowodu osobistego/paszportu</label>
                                    <input type="text" className="form__input" maxLength={9} {...register("document")} />
                                    {errors.document && <p className="error__message"> {errors.document.message}</p>}
                                </div>
                            </div>

                            <input type="submit" className="form__btn" value="Zarejestruj się"/>
                        </form>
                    </div>
                </div>
            </div>

        </div>
      )
    }
