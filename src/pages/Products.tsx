
import ProductList from '../components/ProductList';
import Button from '../components/common/Button/Button';
import InputText from '../components/common/Input/InputText';
import Dropdown from '../components/common/Dropdown/Dropdown';
import MultiSelectDropdown from '../components/common/MultiSelectDropdown/MultiSelectDropdown';
import RadioButton from '../components/common/RadioButton/RadioButton';

import CheckboxGroup from '../components/common/Checkbox/CheckboxGroup';
import React , {useState} from 'react';

import Menu from '../components/common/Menu/Menu';

const Products = () => {

  const options = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'HTML', value: 'html' },
    { label: 'CSS', value: 'css' },
    { label: 'JS', value: 'js' },
    { label: 'Java', value: 'java' },
    { label: 'Dotnet', value: 'dotnet' },
    { label: 'Python', value: 'python' },
  ];
  const [framework, setFramework] = useState('');
  const [selectedFrameworks, setSelectedFrameworks] = useState(['react']);
  const [gender, setGender] = useState('male');

  const [skills, setSkills] = useState(['react']);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    return (
        <div>
            
            <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
             
              <Dropdown
                label="Choose Framework"
                name="framework"
                value={framework}
                onChange={setFramework}
                options={options}
              />
            </div>
             <InputText
              error= "select field"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              />
            <Button label="Add to cart" />


            <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
              <MultiSelectDropdown
                label="Select Frameworks"
                name="frameworks"
                selectedValues={selectedFrameworks}
                onChange={setSelectedFrameworks}
                options={options}
                placeholder="Choose frameworks"
              />
            </div>

            <div style={{display:"flex", padding:"10px"}}>
      <RadioButton
        label="Male"
        name="gender"
        value="male"
        checked={gender === 'male'}
        onChange={(e) => setGender(e.target.value)}
      />
      <RadioButton
        label="Female"
        name="gender"
        value="female"
        checked={gender === 'female'}
        onChange={(e) => setGender(e.target.value)}
      />
    </div>
    <div style={{margin:"10px" , width:"150px"}}>
      {skills.join(', ')}
      <CheckboxGroup
        label="Select Skills"
        name="skills"
        options={options}
        selected={skills}
        onChange={setSkills}
      />
    </div>
    <div>
     <Menu/>
    </div>
           
            <ProductList/>
        </div>
    )
}

export default Products