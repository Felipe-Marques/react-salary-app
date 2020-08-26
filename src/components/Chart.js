import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function PieChart({
  inss,
  irpf,
  netSalary,
  colorINSS,
  colorIRPF,
  colorNetSalary,
}) {
  const data = {
    labels: ['Desconto INSS', 'Desconto IRPF', 'Salário Líquido'],
    datasets: [
      {
        data: [inss, irpf, netSalary],
        borderColor: [colorINSS, colorIRPF, colorNetSalary],
        backgroundColor: [colorINSS, colorIRPF, colorNetSalary],
      },
    ],
  };
  /* const options = {
    title: {
      display: true,
      text: ' ChartDoughnut',
    },
  }; */
  return <Pie data={data} />;
}
