import { validateForms } from '../functions/validate-forms';

const formElements = document.querySelectorAll('.form-validate')

const rules = [
  {
    ruleSelector: '.field-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
      }
    ]
  },
  {
    ruleSelector: '.field-tel',
    tel: true,
    rules: [
      {
        rule: 'required',
        value: true,
      }
    ]
  },
  {
    ruleSelector: '.field-email',
    rules: [
      {
        rule: 'required',
      },
			{
				rule: 'email',
			},
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка');
};

formElements?.forEach((element) => {
  validateForms(`.${element.className}`, rules, afterForm);
})