import React from 'react';

import Input from './Input';
import RadioButtons from './RadioButtons';
import CheckboxGroup from './CheckboxGroup';
import Select from './Select';
import Textarea from './Textarea';
import DatePicker from './DatePicker';
import MaterialInput from './MaterialInput';
import MaterialTextarea from './MaterialTextarea';
import MaterialSelect from './MaterialSelect';
import MaterialSelectCountry from './MaterialSelectCountry';
import MaterialSelectCategories from './MaterialSelectCategories';
import RadioButtonsArray from './RadioButtonsArray';
import InputImages from './InputImages';

const FormControl = (props) =>{
    const { control, ...rest } = props
    switch(control) {
        case 'input': return <Input {...rest} />
        case 'textarea': return <Textarea {...rest} />
        case 'select': return <Select {...rest} />
        case 'radio': return <RadioButtons {...rest} />
        case 'checkbox': return <CheckboxGroup {...rest} />
        case 'date': return <DatePicker {...rest} />
        case 'inputImages': return <InputImages {...rest} />
        case 'materialInput': return <MaterialInput {...rest} />
        case 'materialTextarea': return <MaterialTextarea {...rest} />
        case 'materialSelect': return <MaterialSelect {...rest} />
        case 'materialSelectCountry': return <MaterialSelectCountry {...rest} />
        case 'materialSelectCategories': return <MaterialSelectCategories {...rest} />
        case 'RadioButtonsArray': return <RadioButtonsArray {...rest} />
        default: return null
    }
}

export default FormControl ;