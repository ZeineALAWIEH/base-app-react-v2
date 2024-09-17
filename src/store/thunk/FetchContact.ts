import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";

//Send e-mail
export const fetchContactForm = createAsyncThunk('contact/fetchContactForm', async (_, thunkAPI) => {

    const state = thunkAPI.getState() as RootState
    
    const contactFormData = {
        nom : state.contact.credentials.name.fieldValue,
        email : state.contact.credentials.email.fieldValue,
        subject : state.contact.credentials.subject.fieldValue,
        message : state.contact.credentials.message.fieldValue,
    }

    const { data } = await axios.post("https://webakinob.fr/api/mail/rahmachebbi.php", contactFormData);    

    return data;

});