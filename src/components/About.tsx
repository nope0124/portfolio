import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const About: React.FC = () => {
  return (
    <>
      <div className="container mx-auto text-gray-700 mt-14 pt-14 font-bold">
        <div className="flex flex-col justify-center items-center px-8">
          <span className="text-4xl text-gray-800 mb-8">About</span>
          <div className="flex flex-wrap mx-2 text-center">
            競プロをやっていました。<br/>現在はゲーム開発を主に行なっています。
          </div>
        </div>
      </div>
    </>
  );
}

export default About;