import React, { Component } from 'react';
import Header from '../Header';
import InputFullSalary from './InpuFullSalary';
import InputReadOnly from './InputReadOnly';
import { calculateSalaryFrom } from '../helpers/salary';
import PieChart from '../Chart';

const COLOR_INSS = '#e67e22';
const COLOR_IRPF = '#c0392b';
const COLOR_NET_SALARY = '#16a085';

export default class Base extends Component {
  constructor() {
    super();

    //Aways = before {}!!
    this.state = {
      fullSalary: 1000,
    };
  }

  /*Must be an Arrow Function
  handleButtonDownClick = () => {
    const { currentCounter, steps } = this.state;

    //Aways with () before {}!!
    this.setState({
      currentCounter: currentCounter - 1,
      steps: steps + 1,
    });
  };*/

  handleFullSalaryChange = (newValue) => {
    this.setState({
      fullSalary: newValue,
    });
  };

  render() {
    const { fullSalary } = this.state;

    const SalaryCalculated = calculateSalaryFrom(fullSalary);

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentINSS,
      percentIRPF,
      percentNetSalary,
    } = SalaryCalculated;
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <InputFullSalary
              currentValue={fullSalary}
              onSalaryChange={this.handleFullSalaryChange}
            />
          </div>
          <div className="row">
            <InputReadOnly label="Base INSS" value={baseINSS} />

            <InputReadOnly
              label="Desconto INSS"
              value={discountINSS}
              percentage={percentINSS}
              color={COLOR_INSS}
            />
            <InputReadOnly label="Base IRPF" value={baseIRPF} />
            <InputReadOnly
              label="Desconto IRPF"
              value={discountIRPF}
              percentage={percentIRPF}
              color={COLOR_IRPF}
            />
            <InputReadOnly
              label="Salário Líquido"
              value={netSalary}
              percentage={percentNetSalary}
              color={COLOR_NET_SALARY}
            />
          </div>

          <div>
            <PieChart
              inss={percentINSS}
              irpf={percentIRPF}
              netSalary={percentNetSalary}
              colorINSS={COLOR_INSS}
              colorIRPF={COLOR_IRPF}
              colorNetSalary={COLOR_NET_SALARY}
            />
          </div>
        </div>
      </>
    );
  }
}
