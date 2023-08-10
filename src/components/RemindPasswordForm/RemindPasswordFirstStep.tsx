import "./RemindPasswordFirstStep.css";
import { Link } from "react-router-dom";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
    email: string;
}

export const RemindPasswordFirstStep =() => {

    const schema: ZodType<FormData> = z.object({
        email: z.string().email("Pole musi zawierać znak @").regex(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/, "Pole musi być w formacie xyz@xyz.xyz"),
    });

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({ resolver: zodResolver(schema) });

    const submitData = (data: FormData) => {
        console.log("Wyslano", data)
        toast.success("Wysłano kod weryfikacyjny", {
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
                            <label className="form__label">Email*</label>
                            <input type="email" className="form__input" maxLength={20} {...register("email")} />
                            {errors.email && <p className="error__message"> {errors.email.message}</p>}
                            <input type="submit" className="form__btn" value="Wyślj kod weryfikacyjny"/>
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