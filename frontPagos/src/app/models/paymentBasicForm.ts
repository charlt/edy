export var paymentForm = [
    { control: 'name', validators: [{required: 'required', minLength: 5}] },
    { control: 'last_name', validators: [{required: 'required', minLength: 5}] },
    { control: 'card', validators: [{required: 'required', minLength: 5}] },
    { control: 'month', validators: [{required: 'required', minLength: 5}] },
    { control: 'year', validators: [{required: 'required', minLength: 5}] },
    { control: 'cvv', validators: [{required: 'required', minLength: 5}] },
    { control: 'email', validators: [{required: 'required', minLength: 5}] },
    { control: 'phone_number', validators: [{required: 'required', minLength: 5}] },
];