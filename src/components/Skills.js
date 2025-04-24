import React from 'react'
import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skills() {
  return (
    <>
    {skills.map(({title,percentage},index)=>{
        return(
            <div className="progress_box" key={index}>
                <div className="progress_circle">
                    <CircularProgressbar strokeWidth={8.5} text={`${percentage}%`} value={percentage}/>
                </div>
                <div className="skills_title">{title}</div>
            </div>
        )
    })}
    </>
  )
}
