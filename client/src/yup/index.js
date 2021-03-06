import * as yup from "yup";

yup.setLocale({
  mixed: {
    default: "No es válido.",
    required: "Campo requerido.",
  },
  string: {
    email: "Debes ingresar una dirección de email válida.",
    min: "Debe tener un mínimo de ${min} caracteres.",
    max: "Debe tener un máximo de ${max} caracteres.",
  }
});

export const registerSchema = yup.object().shape({
  firstName: yup.string().min(2).max(76).required(),
  lastName: yup.string().min(2).max(76).required(),
  email: yup.string().min(5).max(76).email().required(),
  password: yup
    .string()
    .min(8)
    .max(40)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/, {
      message:
        "La contraseña necesita, por lo menos, un número, una letra mayúscula, y una letra minúscula.",
    })
    .required(),
  repassword: yup
    .string()
    .min(8)
    .max(40)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/)
    .required()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben ser iguales.")
});

export const profileSchema = yup.object().shape({
  firstName: yup.string().min(2).max(76),
  lastName: yup.string().min(2).max(76),
  githubUsername: yup.string().min(5).max(76),
});

export const passwordSchema = yup.object().shape({
  oldpassword: yup
    .string()
    .min(8)
    .max(40)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/, {
      message:
        "La contraseña necesita, por lo menos, un número, una letra mayúscula, y una letra minúscula.",
    })
    .required(),
  password: yup
    .string()
    .min(8)
    .max(40)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/, {
      message:
        "La contraseña necesita, por lo menos, un número, una letra mayúscula, y una letra minúscula.",
    })
    .required(),
  repassword: yup
    .string()
    .min(8)
    .max(40)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/)
    .required()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben ser iguales.")
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
});

export const updateUserSchema = yup.object().shape({
  firstName: yup.string()
    .min(2)
    .max(76)
    .required(),
  lastName: yup.string()
    .min(2)
    .max(76)
    .required(),
  role: yup.string()
    .required(),
  isSuperAdmin: yup.boolean()
    .required()
});

export const updateTalkSchema = yup.object().shape({
  title: yup.string()
    .max(100),
  description: yup.string()
    .max(500),
  imagen: yup.string().url()
    .max(200),
  url: yup.string().url()
    .max(200)
});

export const updateCompanySchema = yup.object().shape({
  companyName: yup.string()
    .max(100)
    .required(),
  email: yup.string()
    .min(5)
    .max(76)
    .email()
    .required(),
  verified: yup.boolean()
    .required(),
});

export const companyRegisterSchema = yup.object().shape({
  companyName: yup.string()
    .min(2)
    .max(76)
    .required(),
  email: yup.string()
    .min(5)
    .max(76)
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .max(40)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/, {
      message:
        "La contraseña necesita, por lo menos, un número, una letra mayúscula, y una letra minúscula.",
    })
    .required(),
  repassword: yup
    .string()
    .min(8)
    .max(40)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/)
    .required()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben ser iguales."),
  logo: yup.string()
    .url("Debes ingresar un link al logo de la empresa.")
    .max(200)
});

export const createLectureSchema = yup.object().shape({
  title: yup.string()
    .max(100)
    .required(),
  description: yup.string()
    .max(500)
    .required(),
  imagen: yup.string().url()
    .max(400),
  urlLecture: yup.string().url()
    .max(400),
});

export const updateLectureSchema = yup.object().shape({
  title: yup.string()
    .max(100),
  description: yup.string()
    .max(500),
  imagen: yup.string().url()
    .max(400),
  urlLecture: yup.string().url()
    .max(400),
});

export const updateModuleSchema = yup.object().shape({
  title: yup.string()
    .max(100),
  description: yup.string()
    .max(500),
});

export const createVideoSchema = yup.object().shape({
  title: yup.string()
    .max(100)
    .required(),
  url: yup.string()
    .url()
    .max(400)
    .required(),
  img: yup.string()
    .url()
    .max(400),
  profesor: yup.string()
    .max(100)
    .required()
});
