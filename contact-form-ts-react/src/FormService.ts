import formType from "./contactForm";
import contactFormType from "./formType"
const LOCAL_STORAGE_KEY = 'contactsforms'

const ContactService ={
    getContactForms: () : contactFormType[] =>{
        const contactFormStr = localStorage.getItem(LOCAL_STORAGE_KEY)
        return contactFormStr ? JSON.parse(contactFormStr) : []
    },

    addContactForms: (form: formType): void => {
        const contactForms = ContactService.getContactForms();
        const newForm : contactFormType ={
            id: contactForms.length + 1,
            form: form
        }

        const updateContactForm = [...contactForms, newForm];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateContactForm))
    },

    deleteContactFOrm: (id: number): void => {
        const contactForm = ContactService.getContactForms();

        const updateContactFOrm = contactForm.filter((f) => f.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateContactFOrm));
    }
};
export default ContactService