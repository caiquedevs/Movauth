import { useRef, useState } from 'react';
import { Formik, Form, FormikProps, FormikValues } from 'formik';
import { string, object } from 'yup';

import { Container } from './styles';
import { BtnCheck, Input, Button, Hr, Row, Column } from '../../../components';

import permissions from '../../../utils/permissions';

const schema = object().shape({
  data: string().required('Campo Data é obrigatório'),
});

const initialState: any = {
  data: '',
};

interface CreateEmployeeProps {}

function CreateEmployee(props: CreateEmployeeProps) {
  const formikRef = useRef<FormikProps<FormikValues>>(null);
  const [, setChecked] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (value: any) => {
    setChecked(value);
  };

  const handleSubmit = () => {
    alert('submitou');
  };

  const renderChecks = (permission: any) => {
    return (
      <li>
        <BtnCheck data={permission} />
      </li>
    );
  };

  return (
    <Container>
      <Formik
        innerRef={formikRef}
        initialValues={initialState}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, setFieldValue, values, setErrors }) => {
          return (
            <Form autoComplete="off">
              <Hr name="Informações gerais" />

              <Row gap="15px" margin="0 0 20px 0">
                <Column col={3} minCol="300px">
                  <Input
                    label="Nome completo"
                    inputProps={{
                      type: 'text',
                      placeholder: 'Informe o nome completo',
                    }}
                  />
                </Column>

                <Column col={3} minCol="200px">
                  <Input
                    label="CPF"
                    inputProps={{
                      type: 'text',
                      placeholder: 'Informe o CPF',
                    }}
                  />
                </Column>

                <Column col={3} minCol="200px">
                  <Input
                    label="Data de nascimento"
                    inputProps={{ type: 'date' }}
                  />
                </Column>
              </Row>

              <Row gap="15px">
                <Column col={3} minCol="300px">
                  <Input
                    label="Email"
                    inputProps={{
                      type: 'text',
                      placeholder: 'Informe o email',
                    }}
                  />
                </Column>

                <Column col={3} minCol="200px">
                  <Input
                    label="Senha"
                    inputProps={{
                      type: 'text',
                      placeholder: 'Informe uma senha',
                    }}
                  />
                </Column>
              </Row>

              <Hr name="Permissões de funcionário" />

              <ul>{permissions.gerente.map(renderChecks)}</ul>

              <Row justify="flex-end" margin="5px 0 0 0">
                <Column col={3} minCol="300px">
                  <Button type="button" txtTransform="uppercase" bg="primary">
                    Cadastrar
                  </Button>
                </Column>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default CreateEmployee;
