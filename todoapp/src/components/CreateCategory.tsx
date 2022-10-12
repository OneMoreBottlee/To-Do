import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState } from "../atoms";

interface IForm {
    category: string,
}

function CreateCategory() {
    const setCategory = useSetRecoilState(categoryState)
    const categorys = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ category }: IForm) => {
        // setCategory((prev) => {
        //     return {...prev as any, [category]:[]}
        // })
        setValue("category", "");
        // console.log(categoryState)gma...

    }

    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("category", {
                required: "Please Write 카테고리"
            })} placeholder="Make Category" />
            <button>ADD</button>
        </form>
    )
}

export default CreateCategory;