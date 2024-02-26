import {useState} from 'react';

const Form = ({onGenerate}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    linkedin: '',
    twitter: '',
    github: '',
    interests: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="on"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn"
          value={formData.linkedin}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="twitter"
          placeholder="Twitter"
          value={formData.twitter}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="github"
          placeholder="GitHub"
          value={formData.github}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="interests"
          placeholder="Interests"
          value={formData.interests}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Generate</button>
    </form>
  );
};

export default Form;
