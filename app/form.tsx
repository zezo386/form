import { revalidatePath } from "next/cache";
import { add_data } from "./action";

export default async function Form(){
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name") as string;
                const email = formData.get("email") as string;
                const nationalId = formData.get("nationalId") as string;

                await add_data({ name, email, nationalId });
                revalidatePath("/");
            }}
        >
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" required />
            </div>
            <div>
                <label htmlFor="nationalId">National ID:</label>
                <input type="text" name="nationalId" required />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}