// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vacByAgeList} = props

  return (
    <div className="vaccination-by-age-bg-container">
      <h1 className="heading">Vaccination by age</h1>
      <ResponsiveContainer width={1000} height={300}>
        <PieChart className="responsive-con" width={1000} height={500}>
          <Pie
            cx="70%"
            cy="40%"
            data={vacByAgeList}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="45-60" fill="#2cc6c6" />
            <Cell name="Above 60" fill="#a3df9f" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationByAge
