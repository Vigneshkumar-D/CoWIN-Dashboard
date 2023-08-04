// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    vacCoverageList: [],
    vacByGenderList: [],
    vacByAgeList: [],
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    // const options = {
    //   method: 'GET',
    // }
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()

      this.setState({
        apiStatus: apiStatusConstant.success,
        vacCoverageList: data.last_7_days_vaccination,
        vacByGenderList: data.vaccination_by_gender,
        vacByAgeList: data.vaccination_by_age,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderInprogressView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        className="failure-img"
        alt="failure view"
      />
      <h1 className="failure-title">Something went wrong</h1>
    </div>
  )

  renderDashBoard = () => {
    const {vacCoverageList, vacByGenderList, vacByAgeList} = this.state

    return (
      <div className="dashboard-container">
        <VaccinationCoverage vacCoverageList={vacCoverageList} />
        <VaccinationByGender vacByGenderList={vacByGenderList} />
        <VaccinationByAge vacByAgeList={vacByAgeList} />
      </div>
    )
  }

  renderPages = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderInprogressView()
      case apiStatusConstant.success:
        return this.renderDashBoard()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return ''
    }
  }

  render() {
    return (
      <div className="covin-dashboard-bg-container">
        <div className="sub-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              className="logo"
              alt="website logo"
            />
            <h1 className="title">Co-Win</h1>
          </div>
          <h1 className="india-title">CoWIN Vaccination in India</h1>
          <div className="chart-view-container">{this.renderPages()}</div>
        </div>
      </div>
    )
  }
}
export default CowinDashboard
