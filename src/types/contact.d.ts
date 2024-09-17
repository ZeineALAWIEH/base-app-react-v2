//contact form
export interface IContactFormField {
    fieldKey:number,
    fieldId:string,
    fieldLabel:string,
    fieldPlaceholder:string,
    fieldColor :OverridableStringUnion<"primary" | "error" | "secondary" | "info" | "success" | "warning", TextFieldPropsColorOverrides> | undefined,
    isFieldFocused: boolean | undefined,
    fieldHelperText:string,
    isFieldError:boolean,
    fieldValue:string,
}

//contact coordonnées
export interface IContactCoordonnees {
    id:number,
    title:string,
    content:string,
    icon:ReactNode
}

//contact reducer
export interface IContactStateCredentials {
    fieldValue:string,
    fieldColor :OverridableStringUnion<"primary" | "error" | "secondary" | "info" | "success" | "warning", TextFieldPropsColorOverrides> | undefined,
    isFieldFocused: boolean | undefined,
    fieldHelperText:string,
    isFieldError:boolean,
}

export interface IContactState {
    credentials : {
        name:IContactStateCredentials,
        email :IContactStateCredentials,
        subject:IContactStateCredentials,
        message:IContactStateCredentials,
      },
      data : null | { success : boolean},
      isLoading: boolean,
      responseMessage : {
        severity:OverridableStringUnion<AlertColor, AlertPropsColorOverrides> | undefined,
        content:string,
    },
}