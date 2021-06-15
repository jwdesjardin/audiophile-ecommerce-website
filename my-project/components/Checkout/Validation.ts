export const validateForm = (values): { name?: string; email?: string; phone?: string } => {
	const errors: { name?: string; email?: string; phone?: string } = {}
	if (!values.name) {
		errors.name = '* Required'
	} else if (!values.email) {
		errors.email = '* Required'
	} else if (!values.phone) {
		errors.phone = '* Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = '* Invalid email address'
	}
	return errors
}
