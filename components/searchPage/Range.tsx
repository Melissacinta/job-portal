/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactDOM from 'react-dom'
import { useRanger } from 'react-ranger'

export default function Range({ values, setValues }) {
  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 1000000,
    stepSize: 100,
    values,
    onChange: setValues,
  })

  return (
    <div className="App">
      <div
        {...getTrackProps({
          style: {
            height: '4px',
            background: '#3A64BE',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,.6)',
            borderRadius: '2px',
          },
        })}
      >
        {handles.map(({ getHandleProps }) => (
          <button
            {...getHandleProps({
              style: {
                width: '14px',
                height: '14px',
                outline: 'none',
                borderRadius: '100%',
                background: '#3A64BE',
                border: 'solid 1px #fff',
              },
            })}
          />
        ))}
      </div>
    </div>
  )
}
