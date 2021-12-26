import { useState, useEffect } from 'react'
import {MassagesType} from '../data/MassagesType'

export const useGetMassage = (id) => {

  const [massageData, setMassageData] = useState({});
 

  useEffect(()=>{
    const getMassage = async() => {
      await MassagesType.forEach(massage => {
        if(massage.id == id){
          setMassageData(massage)
        }
      })
     
    }
    getMassage()
  },[])



   return {massageData};
}