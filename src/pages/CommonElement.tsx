
import Button from '../components/common/Button/Button';
import InputText from '../components/common/Input/InputText';
import Dropdown from '../components/common/Dropdown/Dropdown';
import MultiSelectDropdown from '../components/common/MultiSelectDropdown/MultiSelectDropdown';
import RadioButton from '../components/common/RadioButton/RadioButton';

import CheckboxGroup from '../components/common/Checkbox/CheckboxGroup';
import React , {useState} from 'react';

import Menu from '../components/common/Menu/Menu';
import FileInput from '../components/common/FileInput/FileInput';
import Textarea from '../components/common/Textarea/Textarea';

const CommonElement = () => {

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
    const menuItems = 
    {
    label : 'Men',
    icon:'',
    subItems: ['Tshirts' ,'Shirts', 'pants' ]
    }

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

    const [selectedFile, setSelectedFile] = useState<string>('');

    const handleFileChange = (files: FileList | null) => {
        if (files && files.length > 0) {
            setSelectedFile(files[0].name);
        }
    };

    const [bio, setBio] = useState('');

    return (
        <div style={{width: "90%",  margin:"10px"}}>   
            
            <div style={{
                    width: "50%", 
                    border:"1px solid blue", 
                    margin:"10px" , 
                    padding:"10px" , 
                    height: "200px",
                    background:"grey"
                }}>
                <div> Menu </div>
                <Menu item={menuItems}/>
            </div>

            <div style={{width: "50%", border:"1px solid blue", margin:"10px" , padding:"10px"}}>
                <h3>Input box</h3>
                <InputText
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                <h3> output: {formData.name}</h3>
            </div>  
            <div style={{width: "50%", border:"1px solid blue", margin:"10px",padding:"10px"}}>
                <h3>Button</h3>                
                <Button label="Add to cart" />
            </div>         
            <div style={{width: "50%", border:"1px solid blue", margin:"10px" , padding:"10px"}}> 
              <h3>Select box</h3> 
              <Dropdown
                label="Choose Framework"
                name="framework"
                value={framework}
                onChange={setFramework}
                options={options}
              />
              <h3>output : {framework} </h3>
            </div>

            <div style={{width: "50%", border:"1px solid blue", margin:"10px" , padding:"10px"}}> 
              <h3>Multiselect </h3>
              <MultiSelectDropdown
                label="Select Frameworks"
                name="frameworks"
                selectedValues={selectedFrameworks}
                onChange={setSelectedFrameworks}
                options={options}
                placeholder="Choose frameworks"
              />
              <h3>output: {selectedFrameworks.join(', ')}</h3>
            </div>

            <div style={{width: "50%", border:"1px solid blue", margin:"10px" , padding:"10px"}}> 
                <h3>Radiobutton </h3>
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
                <h3> output: {gender}</h3>
            </div>
            <div style={{width: "50%", border:"1px solid blue", margin:"10px" , padding:"10px"}}>                
                <CheckboxGroup
                    label="Select Skills"
                    name="skills"
                    options={options}
                    selected={skills}
                    onChange={setSkills}
                />
               <h3>output : {skills.join(', ')}</h3> 
            </div>
            <div style={{width: "50%", border:"1px solid blue", margin:"10px" , padding:"10px"}}>
                <FileInput label="Updoad a File " onChange={handleFileChange} />
                {selectedFile && <p>Selected File: {selectedFile}</p>}
            </div>
            <div style={{width: "50%", border:"1px solid blue", margin:"10px" , padding:"10px"}}>
                <Textarea
                    label="Tell us about yourself"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell us about yourself..."
                />
            </div>
            
        </div>
    )
}

export default CommonElement