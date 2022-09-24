import { useForm } from 'react-hook-form';

const WeaponsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Weapon"
                {...register("Weapon", { required: true })}
            />
            <input
                type="text"
                placeholder="Description"
                {...register("Description", { required: true })}
            />
            <input
                type="text"
                placeholder="Unlock"
                {...register("Unlock", { required: true })}
            />

            <input
                {...register("Evolution", { required: true })}
                type="radio"
                value="true,false"
            />

            <input
                type="text"
                placeholder="Evolution Needs"
                {...register("Evolution Needs", { required: true })}
            />

            <input type="submit" />
        </form>
    );
};

export default WeaponsForm;
