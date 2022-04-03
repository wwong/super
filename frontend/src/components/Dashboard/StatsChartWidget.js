import { Component } from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
} from 'reactstrap'

export default (props) => {
  let text = props.text || 'Title'
  let data = props.data || [50, 50]
  let backgroundColor = props.colors || ["#232323", "#f4f3ef"]
  let labels = props.labels || ['Sample1', 'Sample2']

  const chart = {
    data: {
      labels: labels,
      datasets: [
        {
          label: "Queries",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: backgroundColor,
          borderWidth: 0,
          barPercentage: 1.6,
          data: data,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        title: {
          display: true,
          text: text,
          position: "bottom",
          color: "#66615c",
          font: {
            weight: 400,
            size: 30,
          },
        },
      },
      maintainAspectRatio: false,
      cutout: "90%",
      scales: {
        y: {
          ticks: {
            display: false,
          },
          grid: {
            drawBorder: false,
            display: false,
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5" className="text-muted text-center">{props.title}</CardTitle>
        {props.description ? (
          <p className="card-category">{props.description}</p>
        ) : (null)}
      </CardHeader>
      <CardBody>
        <Doughnut
          data={chart.data}
          options={chart.options}
          className="ct-chart ct-perfect-fourth"
          height={200}
        />
      </CardBody>
      {props.footerText ? (
      <CardFooter>
        {/*<div className="legend">
          <i className="fa fa-circle text-danger" />
          Blocked
        </div>*/}
        <hr />
        <div className="stats">
          <i className={props.footerIcon} />
          {props.footerText}
        </div>
      </CardFooter>
      ) : (null)}
    </Card>
  )
}