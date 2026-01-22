'use server'

export async function submitForm(form: any) {
    console.log(form.get('email'))
}