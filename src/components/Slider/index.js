import React, { useState, useRef, useEffect } from 'react'
import * as S from './styles'
import { NavigateBefore, NavigateNext } from '@styled-icons/material-outlined'
import BarChart from '../Charts/BarChart'
import LineChart from '../Charts/LineChart'
import PieChart from '../Charts/PieChart'
// const dataJson = require('../../data')
import dataJson from '../../dataJson'

const Slider = () => {
  const [translateX, setTranslateX] = useState(0)
  const [listSize, setListSize] = useState(0)
  const [data, setData] = useState([])
  // const [keys, setKeys] = useState(['company_A', 'company_B', 'company_C'])
  const keys = ['company_A', 'company_B', 'company_C']
  const Kmax = 3
  const listRef = useRef()
  let cronRef = useRef()

  const formatData = (param1, param2) => {
    const newData = []
    for (let index = param1; index <= param2; index++) {
      const obj = dataJson[index]
      obj.index = index
      newData.push(obj)
    }
    setData(newData)
  }

  useEffect(() => {
    formatData(0, 50)
    setListSize(listRef.current.offsetWidth)

    const getWith = () => {
      if (cronRef.current) clearTimeout(cronRef.current)

      cronRef.current = setTimeout(() => {
        setListSize(listRef.current.offsetWidth)
      }, 100)
    }

    window.addEventListener('resize', getWith)

    return () => window.removeEventListener('resize', getWith)
  }, [])

  useEffect(() => {
    // console.log(listSize)
  }, [listSize])
  useEffect(() => {
    console.log(data)
  }, [data])

  const handleClick = (direction) => {
    if (direction === 'left') {
      if (translateX + listSize === listSize) {
        setTranslateX(-(listSize * 2))
      } else {
        setTranslateX(translateX + listSize)
      }
    } else {
      if (translateX - listSize <= -(listSize * Kmax)) {
        setTranslateX(0)
      } else {
        setTranslateX(translateX - listSize)
      }
    }
  }

  return (
    <S.Wrapper>
      <S.NavigateLeft onClick={() => handleClick('left')}>
        <NavigateBefore />
      </S.NavigateLeft>

      <S.List ref={listRef}>
        <S.Track translateX={translateX} width={listSize * Kmax}>
          <S.Chart>
            <BarChart data={data} keys={keys} />
          </S.Chart>
          <S.Chart>
            <LineChart data={data} keys={keys} />
          </S.Chart>
          <S.Chart>
            <PieChart data={data} keys={keys} />
          </S.Chart>
        </S.Track>
      </S.List>

      <S.NavigateRight onClick={() => handleClick('right')}>
        <NavigateNext />
      </S.NavigateRight>
    </S.Wrapper>
  )
}

export default Slider
