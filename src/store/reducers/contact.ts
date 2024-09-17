import { createAction, createReducer } from '@reduxjs/toolkit';
import { fetchContactForm } from '../thunk/FetchContact';
import { IContactState } from '@/types/contact';


const initialState:IContactState = {
    credentials  : {
        name:{
            fieldValue:"",
            fieldColor :'primary',
            isFieldFocused: undefined,
            fieldHelperText:" ",
            isFieldError:false,
        },
        email : {
            fieldValue:"",
            fieldColor :'primary',
            isFieldFocused: undefined,
            fieldHelperText:" ",
            isFieldError:false,
        },
        subject: {
            fieldValue:"",
            fieldColor :'primary',
            isFieldFocused: undefined,
            fieldHelperText:" ",
            isFieldError:false,

        },
        message: {
            fieldValue:"",
            fieldColor :'primary',
            isFieldFocused: undefined,
            fieldHelperText:" ",
            isFieldError:false,
        }
    },
    data : null,
    isLoading: false,
    responseMessage : {
        severity:"",
        content:"",
    },
};

export const resetContactForm = createAction('contact/resetContactForm')
export const resetContactResponseMessage = createAction('contact/resetContactResponseMessage')
export const changeNameContactValue = createAction<string>('contact/changeNameContactValue')
export const changeEmailContactValue = createAction<string>('contact/changeEmailContactValue')
//export const checkEmailContactValue = createAction('contact/checkEmailContactValue')
export const changeSubjectContactValue = createAction<string>('contact/changeSubjectContactValue')
export const changeMessageContactValue = createAction<string>('contact/changeMessageContactValue')

const contactReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchContactForm.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchContactForm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            if(state.data?.success) {
                state.responseMessage.severity = "success";
                state.responseMessage.content = "Votre message a bien été envoyé au Dr Rahma Chebbi!";
            }
        })
        .addCase(fetchContactForm.rejected, (state) => {
            state.isLoading = false;
            state.responseMessage.severity = "error";
            state.responseMessage.content = "Votre message n'a pas été envoyé, un problème est survenue! Merci de recommencer ultérieurement."
        })        
        .addCase(resetContactResponseMessage, (state) => {
            state.responseMessage = {
                severity:"",
                content:""
            }
        })
        .addCase(resetContactForm, (state) => {
            state.credentials= {
                name:{
                    fieldValue:"",
                    fieldColor :'primary',
                    isFieldFocused: undefined,
                    fieldHelperText:" ",
                    isFieldError:false,
                },
                email : {
                    fieldValue:"",
                    fieldColor :'primary',
                    isFieldFocused: undefined,
                    fieldHelperText:" ",
                    isFieldError:false,
                },
                subject: {
                    fieldValue:"",
                    fieldColor :'primary',
                    isFieldFocused: undefined,
                    fieldHelperText:" ",
                    isFieldError:false,
        
                },
                message: {
                    fieldValue:"",
                    fieldColor :'primary',
                    isFieldFocused: undefined,
                    fieldHelperText:" ",
                    isFieldError:false,
                }
              }
        })
        .addCase(changeNameContactValue, (state, action) => {
            state.credentials.name.fieldValue = action.payload
            if(state.credentials.name.fieldValue !=  "") {
                state.credentials.name.fieldColor = "success"
                state.credentials.name.isFieldFocused = true
                state.credentials.name.isFieldError = false
                state.credentials.name.fieldHelperText = " "
            } else {
                state.credentials.name.fieldColor = "primary"
                state.credentials.name.isFieldFocused = undefined
                state.credentials.name.isFieldError = true
                state.credentials.name.fieldHelperText = "Le nom ne peut pas être vide!"
            }
        })
        .addCase(changeEmailContactValue, (state, action) => {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            state.credentials.email.fieldValue = action.payload
            if(emailRegex.test(state.credentials.email.fieldValue)) {
                state.credentials.email.fieldColor = "success"
                state.credentials.email.isFieldFocused = true
                state.credentials.email.isFieldError = false
                state.credentials.email.fieldHelperText = " "
            } else {
                state.credentials.email.fieldColor = "primary"
                state.credentials.email.isFieldFocused = undefined
                state.credentials.email.isFieldError = true
                state.credentials.email.fieldHelperText = "L'email est valide lorsque la bordure est verte!"
            }
        })
        .addCase(changeSubjectContactValue, (state, action) => {
            state.credentials.subject.fieldValue = action.payload
            if(state.credentials.subject.fieldValue !=  "") {
                state.credentials.subject.fieldColor = "success"
                state.credentials.subject.isFieldFocused = true
                state.credentials.subject.isFieldError = false
                state.credentials.subject.fieldHelperText = " "
            } else {
                state.credentials.subject.fieldColor = "primary"
                state.credentials.subject.isFieldFocused = undefined
                state.credentials.subject.isFieldError = true
                state.credentials.subject.fieldHelperText = "Le sujet ne peut pas être vide!"
            }
        })
        .addCase(changeMessageContactValue, (state, action) => {
            state.credentials.message.fieldValue = action.payload
            if(state.credentials.message.fieldValue !=  "") {
                state.credentials.message.fieldColor = "success"
                state.credentials.message.isFieldFocused = true
                state.credentials.message.isFieldError = false
                state.credentials.message.fieldHelperText = " "
            } else {
                state.credentials.message.fieldColor = "primary"
                state.credentials.message.isFieldFocused = undefined
                state.credentials.message.isFieldError = true
                state.credentials.message.fieldHelperText = "Le message ne peut pas être vide!"
            }        
        })
        /* .addCase(checkEmailContactValue, (state) => {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(emailRegex.test(state.credentials.email.fieldValue)) {
                state.credentials.email.fieldColor = "success"
                state.credentials.email.isFieldFocused = true
                state.credentials.email.isFieldError = false
                state.credentials.email.fieldHelperText = " "
            } else {
                state.credentials.email.fieldColor = "primary"
                state.credentials.email.isFieldFocused = undefined
                state.credentials.email.isFieldError = true
                state.credentials.email.fieldHelperText = "L'email est valide lorsque la bordure est verte!"
            }
        }) */
    });
        
export default contactReducer;

/*
Vérification de l'email :

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const contactEmail = "exemple@domaine.com";

if (emailRegex.test(contactEmail)) {
console.log("L'email est valide.");
} else {
console.log("L'email n'est pas valide.");
}

Cette regex assure que :
•  L'email commence par des lettres, chiffres, points, tirets ou caractères spéciaux comme _, %, +, -.

•  Il y a un @ suivi par un domaine qui peut contenir des lettres, chiffres, points ou tirets.

•  Le domaine se termine par une extension de 2 caractères ou plus.

----
La méthode .test() est une fonction en JavaScript utilisée pour tester si une chaîne de caractères correspond à une expression régulière (regex). 
Elle renvoie true si la chaîne correspond à la regex, et false sinon.

*/