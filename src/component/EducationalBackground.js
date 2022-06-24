import React from 'react';
import './EducationalBackground.css'
import Pendidikan from './images/pendidikan.png'

class EducationalBackground extends React.Component {
    render () {
        
        return (
            <div className='container-Educational-Background'>
                <img className='pendidikan' src={Pendidikan}/>
            <table>
            <tr>
                <th className='title'>Sekolah Dasar </th>
                <th></th>
                <th className='title'> Sekolah Menengah Pertama </th>
            </tr>
            <tr>
                <td className='name-year'>MI MA'ARIF NU KEDUNGRANDU 2006 - 2011</td>
                <td></td>
                <td className='name-year'>SMPN 2 KARANGLEWAS 2013 - 2016</td>
            </tr>
             <tr>
                <th className='title'>Sekolah Menengah Kejuruan </th>
                <th></th>
                <th className='title'> Kuliah </th>
            </tr>
            <tr>
                <td className='name-year'>SMK TELKOM SANDHY PUTRA PURWOKERTO    (RPL) 2016 - 2018</td>
                <td></td>
                <td className='name-year'>INSTITUT TEKNOLOGI TELKOM PURWOKERTO  (S1 RPL) 2018 - 2022</td>
            </tr>
                </table> 
            </div>
                
        );
    }
}

export default EducationalBackground;