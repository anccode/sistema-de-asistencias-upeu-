import { Field, Form, Formik, ErrorMessage } from 'formik';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { Button } from '../../components';
import { ContextAuth } from '../../context/ContextAuth';
import { LayoutGeneral } from "../../layouts"
interface FormLoginI {
	usuario: string;
	password: string;
}

const initialValues: FormLoginI = { usuario: '', password: '' };

const validate = (values: FormLoginI) => {
	const errors: any = {};
	if (!values.usuario) {
		errors.email = '*El campo email es requerido';
	}

	if (!values.password) {
		errors.password = '*El campo contraseña es requerido';
	}
	return errors;
};



const PageLogin = () => {
	const { setAuth } = useContext(ContextAuth)
	const router = useRouter()
	const onSubmit = (values: FormLoginI) => {
		fetch("api/v1/auth/login", { method: "POST", body: JSON.stringify(values) })
			.then((resRaw) => resRaw.json()).then((res) => {
				console.log(res)
				if (res.ok === true) {
					setAuth(res.token, res.data[0])
					router.push("persons")
				}
			})
	};
	
	return (
		<LayoutGeneral
			mainHeight="h-screen"
			footerHeight="h-1/12"
			navbarHeight="h-1/12"
		>
			<div className="h-10/12 flex justify-center items-center">
				{/* card login */}
				<div className="p-10 rounded-3xl shadow-xl max-w-sm flex flex-col items-center gap-y-6 border">
					<img src="/logo-upeu.svg" alt="logo-upeu" />
					<h1 className="font-black text-3xl italic">INICIAR SESIÓN</h1>
					<Formik
						initialValues={initialValues}
						validate={validate}
						onSubmit={onSubmit}
					>
						{() => (
							<Form className="flex flex-col gap-y-4 w-full items-center ">
								<Field
									name={'usuario'}
									placeholder={'Usuario'}
									type={'text'}
									className={'bg-gray-100 w-full rounded-full px-4 py-2'}
								></Field>
								<ErrorMessage
									name={'email'}
									component="div"
									className={'text-red-500 w-full'}
								></ErrorMessage>
								<Field
									name={'password'}
									placeholder={'Contraseña'}
									type={'password'}
									className={'bg-gray-100 w-full rounded-full px-4 py-2'}
								></Field>
								<ErrorMessage
									name={'password'}
									className={'text-red-500 w-full'}
									component="div"
								></ErrorMessage>
								<Button
									type="submit"
									background={'bg-primary'}
									text={'INGRESAR'}
									padding={'px-6 py-2'}
									rounded={'rounded-full'}
									colorText={'text-white'}
									className={'font-bold w-1/2'}
								></Button>
							</Form>
						)}
					</Formik>
					<Link href={'/recovery-account'} >
						<p className=" text-primary text-md">¿Olvidaste tu contraseña?</p>
					</Link>
				</div>
			</div>
		</LayoutGeneral>
	);
};

export default PageLogin