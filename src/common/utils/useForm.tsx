import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({
    name: "",
    phone:"",
    age:"",
    city:"",
    company:""
  });
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    const url = "";
    if (Object.values(values).every((x) => x !== "")) {
      axios
        .post(url, {
          ...values,
        })
        .then(() => {
          setShouldSubmit(true);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues((values) => (values = { name: "", phone: "",age:"",city:"",company:""}));
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
