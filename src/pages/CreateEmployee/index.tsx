import { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import {
  H1,
  Select,
  Drivers,
  Input,
  Hr,
  BtnBack,
  Row,
  Column,
} from '../../components';
import FormEmployee from './FormEmployee';

import employeesType from '../../utils/employees';
import IOption from '../../interfaces/option';

import useQuery from '../../hooks/useQuery';

function CreateEmployeePage(): ReactElement {
  const history = useHistory();
  const query = useQuery();

  const type = query.get('type');

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<IOption>();

  const handleChangeSelectEmployees = (option: IOption) => {
    history.push('?type=' + option.value);
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  useEffect(() => {
    const filtered = employeesType.filter((item) => item.value === type)[0];

    if (filtered) return setSelectedEmployee(filtered);
    setSelectedEmployee({ value: 'motoboy', label: 'Motoboy' });
  }, [type]);

  return (
    <Container>
      <Row align="fle-start" gap="10px">
        <BtnBack />
        <H1>Cadastrar novo funcionário</H1>
      </Row>

      <Row gap="15px">
        <Column col={3}>
          <Select
            options={employeesType}
            value={selectedEmployee}
            onChange={handleChangeSelectEmployees}
            label="Selecione o tipo de funcionário"
          />
        </Column>

        {selectedEmployee?.value === 'motoboy' && (
          <Column col={3}>
            <Input
              label="Número do celular"
              inputProps={{
                type: 'text',
                error: null,
                mask: '(00) 0 0000-0000',
                placeholder: '(00) 0 0000-0000',
                value: selectedDate,
                onChange: handleChangeDate,
              }}
            />
          </Column>
        )}
      </Row>

      {selectedEmployee?.value === 'motoboy' && (
        <>
          <Hr name="Lista de motoboys" />
          <Drivers />
        </>
      )}

      {selectedEmployee?.value !== 'motoboy' && <FormEmployee />}
    </Container>
  );
}

export default CreateEmployeePage;
