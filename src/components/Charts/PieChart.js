import { ResponsivePie } from '@nivo/pie'
import React from 'react'
import PropTypes from 'prop-types'

const PieChart = ({ data, keys, colorScheme }) => {
  function prepareData() {
    const newData = []

    keys.forEach((element) => {
      newData.push({ id: element, label: element, value: 0 })
    })

    data.forEach((item) => {
      newData[0].value = newData[0].value + item['company_A']
      newData[1].value = newData[1].value + item['company_B']
      newData[2].value = newData[2].value + item['company_C']
    })
    return newData
  }

  return (
    <ResponsivePie
      data={prepareData()}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: colorScheme }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextColor="#333333"
      radialLabelsLinkColor={{ from: 'color' }}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
      isInteractive={false}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'ruby'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'c'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'go'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'python'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'scala'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'lisp'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'elixir'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'javascript'
          },
          id: 'lines'
        }
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',

          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  )
}

PieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  keys: PropTypes.arrayOf(PropTypes.string),
  colorScheme: PropTypes.string
}

export default PieChart