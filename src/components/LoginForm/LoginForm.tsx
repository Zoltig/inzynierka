
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
    name: string;
    password: string;
}

export const LoginForm = () => {
    const schema: ZodType<FormData> = z.object({
        name: z.string().min(3, "Nazwa użytkownika musi mieć co najmniej 3 znaki").max(30).regex(/^[A-Za-z0-9_]+$/, "Pole może zawierać wyłącznie litery, cyfry lub znak '_' ").nonempty("Pole nie może być puste"),
        password: z.string().min(5, "Hasło musi mieć co najmniej 5 znaków").max(20).nonempty("Pole nie może być puste"),
    });

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({ resolver: zodResolver(schema) });

    const submitData = (data: FormData) => {
        console.log("Wyslano", data)
    }

    return(
        <div className="login">
            <div className="container--right flex">
                <div className="content login__content bg__white flex">
                    <div className="content--right">
                        <div className="title login__title">Logowanie</div>
                        <form className="login__form flex" onSubmit={handleSubmit(submitData)}>
                            <label className="form__label">Nazwa użytkownika*</label>
                            <input type="text" className="form__input" maxLength={30} {...register("name")} />
                            {errors.name && <p className="error__message"> {errors.name.message}</p>}
                            <label className="form__label">Hasło*</label>
                            <input type="password" className="form__input" maxLength={20} {...register("password")} />
                            {errors.password && <p className="error__message"> {errors.password.message}</p>}

                            <input type="submit" className="form__btn" value="Zaloguj"/>
                        </form>
                        <div className="form__links flex">
                            <div className="form__links--password"><Link to="/odzyskaj">Przypomnij hasło</Link></div>
                            <div className="form__links--register"><Link to="/rejestracja">Zarejestruj się</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      )

}