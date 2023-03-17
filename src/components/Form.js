import { useState } from "react";

const Form = ({ getMovie, setMovie }) => {
    //formData state is an OBJECT
  const [formData, setFormData] = useState({ searchTerm: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getMovie(formData.searchTerm);
    setMovie(data)
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Search a movie title"
          value={formData.searchTerm}
          name="searchTerm"
          onChange={handleChange}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
