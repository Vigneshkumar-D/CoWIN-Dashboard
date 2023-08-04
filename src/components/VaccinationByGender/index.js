// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vacByGenderList} = props

  return (
    <div className="vaccination-by-gender-con">
      <h className="heading">Vaccination by gender</h>
      <ResponsiveContainer width={1000} height={500}>
        <PieChart width={1000} height={500}>
          <Pie
            cx="70%"
            cy="40%"
            data={vacByGenderList}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationByGender
