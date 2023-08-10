import "./RemindPasswordFirstStep.css";
import { Link } from "react-router-dom";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
    password: string;
}

export const RemindPasswordThirdStep =() => {


    const schema: ZodType<FormData> = z.object({
        password: z.string().min(5, "Hasło musi mieć co najmniej 5 znaków").max(20).regex(/^[A-Za-z0-9!@#$]+$/, "Pole może zawierać wyłącznie litery, cyfry lub znaki ! @ # $ "),
    });

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({ resolver: zodResolver(schema) });

    const submitData = (data: FormData) => {
        console.log("Wyslano", data)

        toast.success("Hasło zostało zmienione", {
            position: toast.POSITION.TOP_CENTER
          });
    }


    return(
        <div className="remindpasswd">
            <div className="container--right flex">
                <div className="content remindpasswd__content bg__white flex">
                    <div className="content--right">
                        <div className="title remindpasswd__title">Przypomnij hasło</div>
                        <form className="remindpasswd__form flex" onSubmit={handleSubmit(submitData)}>
                            <label className="form__label">Podaj nowe hasło*</label>
                            <input type="password" className="form__input" maxLength={20} {...register("password")} />
                            {errors.password && <p className="error__message"> {errors.password.message}</p>}
                            <input type="submit" className="form__btn" value="Zmień hasło"/>
                        </form>
                        <div className="form__links flex">
                            <div className="form__links--register"><Link to="/rejestracja">Zarejestruj się</Link><ToastContainer /></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}