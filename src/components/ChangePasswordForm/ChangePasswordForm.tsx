import "./ChangePasswordForm.css";
import { Link } from "react-router-dom";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
    password__old: string;
    password__new: string;
}
export const ChangePasswordForm =() => {
    const schema: ZodType<FormData> = z.object({
        password__old: z.string().min(5, "Hasło musi mieć co najmniej 5 znaków").max(20).nonempty("Pole nie może być puste"),
        password__new: z.string().min(5, "Hasło musi mieć co najmniej 5 znaków").max(20).regex(/^[A-Za-z0-9!@#$]+$/, "Pole może zawierać wyłącznie litery, cyfry lub znaki ! @ # $ ").nonempty("Pole nie może być puste"),
    })
    .refine((data) => data.password__old !== data.password__new, {
        message: "Nowe hasło nie może być takie samo jak stare",
        path: ["password__new"],
    });

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({ resolver: zodResolver(schema) });

    const submitData = (data: FormData) => {
        console.log("Wyslano", data)
    }


    return(
        <div className="changepasswd">
            <div className="container--right flex">
                <div className="content changepasswd__content bg__white flex">
                    <div className="content--right">
                        <div className="title changepasswd__title">Zmień hasło</div>
                        <form className="changepasswd__form flex" onSubmit={handleSubmit(submitData)}>
                            <label className="form__label">Stare hasło*</label>
                            <input type="text" className="form__input" maxLength={20} {...register("password__old")} />
                            {errors.password__old && <p className="error__message"> {errors.password__old.message}</p>}
                            <label className="form__label">Nowe hasło*</label>
                            <input type="password" className="form__input" maxLength={20} {...register("password__new")} />
                            {errors.password__new && <p className="error__message"> {errors.password__new.message}</p>}

                            <input type="submit" className="form__btn" value="Zmień hasło"/>
                        </form>
                        <div className="form__links flex">
                            <div className="form__links--register"><Link to="/rejestracja">Zarejestruj się</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}