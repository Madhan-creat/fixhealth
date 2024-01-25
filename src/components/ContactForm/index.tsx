import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import Testimonial from "../Testimonial";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return (
      <Zoom direction="left">
        <Span>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
             <Row>
             <Col span={12}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={12}>
                <Input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={values.phone || ""}
                  onChange={handleChange}
                />
                <ValidationType type="phone" />
              </Col>
             </Row>
             <Row>
             <Col span={8}>
                <Input
                  type="text"
                  name="Age"
                  placeholder="Your Age"
                  value={values.age || ""}
                  onChange={handleChange}
                />
                <ValidationType type="age" />
              </Col>
              <Col span={8}>
                <Input
                  type="text"
                  name="City"
                  placeholder="Your City"
                  value={values.city || ""}
                  onChange={handleChange}
                />
                <ValidationType type="city" />
              </Col>
              <Col span={8}>
                <Input
                  type="text"
                  name="Company"
                  placeholder="Your Company"
                  value={values.company || ""}
                  onChange={handleChange}
                />
                <ValidationType type="company" />
              </Col>
             </Row>
             <Col span={24}>
                <Input
                  type="text"
                  name="Chief Complaints"
                  placeholder="Chief Complaints"
                  value={values.phone || ""}
                  onChange={handleChange}
                />
                <ValidationType type="Phone" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="Any previous experience with physiotherapy"
                  placeholder="Any previous experience with physiotherapy"
                  value={values.phone || ""}
                  onChange={handleChange}
                />
                <ValidationType type="Phone" />
              </Col>
             
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
      <Testimonial />
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
